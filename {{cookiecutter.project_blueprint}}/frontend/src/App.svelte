<script lang="ts">
	export let name: string;
</script>

<main class="h-screen flex flex-col items-center justify-center">
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global lang="postcss">
  @tailwind base;
	@tailwind components;
  @tailwind utilities;
</style>
