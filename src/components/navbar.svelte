<script>
	import { user, isLoggedIn } from '../stores/user';
</script>

<div class="navbar bg-base-200">
	<div class="navbar-start">
		<div class="dropdown">
			<label for={null} tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
			>
				<li><a href={'/'}>Homepage</a></li>
				<li><a href={'/about'}>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href={'/'} class="btn btn-ghost normal-case text-xl">Panpack SA</a>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<label for={null} tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					{#if $isLoggedIn}
						<img src={$user.photoURL} alt={$user.name} />
					{:else}
						<img src={'login.png'} alt={'Login'} />
					{/if}
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
			>
				{#if $isLoggedIn}
					<li><a href={'/settings'}>Settings</a></li>
					<li><a href={'/logout'}>Logout</a></li>
				{:else}
					<li><a href={'/login'}>Login</a></li>
				{/if}
			</ul>
		</div>
	</div>
</div>
