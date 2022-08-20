<script>
	import { user, isLoggedIn } from '../stores/user';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	$isLoggedIn = false;
	$user.email = '';
	$user.name = '';
	$user.theme= 'bumblebee';

	if (browser) {
		goto('/login');
	}
</script>
