<script>
	import { UUID } from '../../services/base/uuid';

	export let label = '';
	export let choices = [''];
	export let value = '';
	export let error = '';

	const identifier = UUID();
</script>

<div class="my-2">
	<label for={identifier} class="label">
		<span class="label-text text-secondary font-bold">{label}</span>
	</label>
	<select id={identifier} bind:value class="select select-bordered select-primary w-full max-w-xs ">
		{#each choices as choice}
			<option value={choice}>{choice}</option>
		{/each}
	</select>
	{#if error}
		<div class="alert alert-warning shadow-lg  py-1 my-2">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
					/></svg
				>
				<span>{error}</span>
			</div>
		</div>
	{/if}
</div>
