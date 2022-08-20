<script>
	import { user, isLoggedIn } from '../stores/user';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import InputCombobox from '../components/base/input-combobox.svelte';
	import InputText from '../components/base/input-text.svelte';
	import { gql } from 'graphql-request';
	import { graphqlRun } from '../services/graphql/endpoint';
	import InputFile from '../components/base/input-file.svelte';

	const CHOICES = ['light', 'dark', 'bumblebee', 'retro', 'winter', 'cyberpunk'];
	let fields = {
		name: $user.name || '',
		theme: $user.theme
	};
	let errors = {
		name: '',
		theme: ''
	};

	let valid = false;
	function handleSubmit() {
		valid = true;

		if (fields.name.trim().length < 1) {
			errors.name = 'El Nombre NO puede estar vacio.';
			valid = false;
		} else {
			errors.name = '';
		}

		if (valid) {
			// Grabar datos
			const query = gql`
				mutation UpdateUser($updateUserId: ID!, $user: UserUpdateInput!) {
					updateUser(id: $updateUserId, user: $user) {
						name
						theme
					}
				}
			`;
			const variables = {
				updateUserId: $user.id,
				user: {
					name: fields.name,
					theme: fields.theme
				}
			};

			const result = graphqlRun(query, variables).then(() => {
				$user.theme = fields.theme;
				$user.name = fields.name;
			});
		}
	}
</script>

<svelte:head>
	<title>Panpack SA - Settings</title>
</svelte:head>

{#if !$isLoggedIn}
	{#if browser}
		{goto('/login')}
	{/if}
{/if}

<div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-6">
	<div class="card-body">
		<h2 class="card-title text-4xl text-primary">Settings</h2>
		<form on:submit|preventDefault={handleSubmit}>
			<InputText label={'Nombre Completo'} bind:value={fields.name} error={errors.name} />
			<InputCombobox
				label={'Tema'}
				choices={CHOICES}
				bind:value={fields.theme}
				error={errors.theme}
			/>
			<InputFile label={'Avatar'} />

			<input type="submit" value="Grabar" class="btn btn-primary my-4" />
		</form>
	</div>
</div>
