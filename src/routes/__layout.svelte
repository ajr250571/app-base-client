<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';
	import { user } from '../stores/user';
</script>
<svelte:head>
	<title>Panpack SA</title>
</svelte:head>

<div data-theme={$user.theme || 'retro'} class="container mx-auto">
	<Navbar />
	<div class='px-4'>
		<slot />
	</div>
	<Footer />
</div>
