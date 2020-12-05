<script lang="ts">
  import { Router } from 'svelte-router-spa';
  import { routes } from './routes';
</script>

<main class="h-screen flex flex-col items-center justify-center">
	<Router {routes} />
</main>

<style global lang="postcss">
  @tailwind base;
	@tailwind components;
  @tailwind utilities;
</style>
