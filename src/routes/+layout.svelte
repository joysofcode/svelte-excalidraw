<script lang="ts">
	let { children } = $props()
</script>

<svelte:head>
	<title>Excalidraw</title>
</svelte:head>

{@render children?.()}

<style>
	:global(body) {
		margin: 0px;
	}
</style>
