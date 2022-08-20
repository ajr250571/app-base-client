<script>
	import InputEmail from '../components/base/input-email.svelte';
	import InputPassword from '../components/base/input-password.svelte';
	import { user, isLoggedIn } from '../stores/user';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { gql } from 'graphql-request';
	import { graphqlRun } from '../services/graphql/endpoint';
	import { Tostada } from '../services/base/alerta';

	let fields = {
		email: '',
		password: ''
	};
	let errors = {
		email: '',
		password: ''
	};

	let valid = false;
	function handleSubmit() {
		valid = true;

		// Validaciones
		if (fields.email.trim().length < 1) {
			errors.email = 'El Mail NO puede estar vacio.';
			valid = false;
		} else {
			errors.email = '';
		}
		if (fields.password.trim().length < 8) {
			errors.password = 'El Password debe tener como minimo 8 caracteres.';
			valid = false;
		} else {
			errors.password = '';
		}

		if (valid) {
			const query = gql`
				query ValidUser($email: String, $password: String) {
					validUser(email: $email, password: $password) {
						id
						name
						theme
						isValid
					}
				}
			`;
			const variables = {
				email: fields.email,
				password: fields.password
			};

			const result = graphqlRun(query, variables).then((res) => {
				$isLoggedIn = res.data.validUser.isValid;
				if ($isLoggedIn) {
					$user.id = res.data.validUser.id;
					$user.email = fields.email;
					$user.name = res.data.validUser.name;
					$user.theme = res.data.validUser.theme;
					$user.photoURL = 'favicon.png';

					if (browser) {
						goto('/');
					}
				} else {
					Tostada('Datos incorrectos, reintente ...');
				}
			});
		}
	}
</script>

<svelte:head>
	<title>Panpack SA - Login</title>
</svelte:head>

<div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-6">
	<img class="block mx-auto w-36 h-36" src={'login.png'} alt={'Login'} />
	<div class="card-body">
		<h2 class="card-title text-4xl text-primary">Login</h2>
		<p class="text-2xl font-semibold">Bienvenido a Arpack Web !!!</p>
		<form on:submit|preventDefault={handleSubmit}>
			<InputEmail label={'Mail'} bind:value={fields.email} error={errors.email} />
			<InputPassword label={'Password'} bind:value={fields.password} error={errors.password} />

			<input type="submit" value="Login" class="btn btn-primary my-4 bg" />
		</form>
	</div>
</div>
