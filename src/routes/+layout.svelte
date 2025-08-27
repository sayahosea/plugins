<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	
	let { children } = $props();
</script>

<svelte:head>
	<meta name="language" content="English">
	<meta name="author" content="Hosea">
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
