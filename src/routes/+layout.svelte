<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<meta name="description" content="List of my Paper plugins. 习泽东 | 天灭中共 | 六四事件 | 八九民运 | 天安门事件"/>
	<meta name="robots" content="index,follow"/>
	<meta name="language" content="English"/>
	<meta name="revisit-after" content="1 day"/>
	<meta name="author" content="Hosea"/>
</svelte:head>

{@render children()}
