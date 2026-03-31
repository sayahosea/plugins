<script>
    import { page } from '$app/state';
</script>

<svelte:head>
    <title>Error - { page.status }</title>
</svelte:head>

<section class="max-h-screen">
    <div class="h-screen flex mt-8 lg:mt-0 md:items-center justify-center">
        <div class="mx-8 lg:mx-0 text-center">
            <h1 class="text-4xl">Error { page.status } :(</h1>
            <a class="btn btn-info btn-wide mt-4" href="/">Go back</a>
        </div>
    </div>
</section>
