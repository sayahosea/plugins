<script>
	let { name, description } = $props();
</script>

<div class="card bg-base-300 w-96 shadow-sm">
	<figure>
		<img
			src="/logo/{ name }.png"
			alt="{ name } Logo"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{ name }</h2>
		<p>{ description }</p>
		<div class="card-actions">
			<a
				class="btn btn-info"
				href="https://github.com/sayahosea/reducemobs"
				rel="noreferrer"
				target="_blank"
			>GitHub</a>
		</div>
	</div>
</div>