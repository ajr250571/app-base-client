<script>
	import { isLoggedIn, user } from '../stores/user';
</script>
<svelte:head>
	<title>Panpack SA - Home</title>
</svelte:head>
<div>
	<h1 class="text-primary text-4xl font-bold">Home Page</h1>
	{#if $isLoggedIn}
		<p class="text-secondary text-2xl pt-2">Hola, {$user.name}</p>
		<p class="text-secondary text-2xl pb-2">Usted esta Conectado ...</p>
	{:else}
		<p class="text-secondary text-2xl pt-2">Usuario Desconectado ...</p>
	{/if}
</div>
