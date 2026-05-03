<script lang="ts">
    let { name, description, repoWebName, repoUrl } = $props();
</script>

<div class="card bg-base-300 md:w-96 shadow-sm">
    <figure>
        <img
                src={ `/logo/${ name }.png` }
                alt={ `${ name } Logo` }
        />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{ name }</h2>
        <p>{ description }</p>
        <div class="card-actions">
            <a
                    class="btn btn-info"
                    href="{ repoUrl }"
                    rel="noreferrer"
                    target="_blank"
            >{ repoWebName }</a>
        </div>
    </div>
</div>