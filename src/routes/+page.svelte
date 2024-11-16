<script lang="ts">
	import Excalidraw from './Excalidraw.svelte'
	import type { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types'

	let excalidrawAPI: ExcalidrawImperativeAPI | undefined = $state()

	$effect(() => {
		excalidrawAPI?.onChange(console.log)
	})
</script>

<Excalidraw theme="dark" excalidrawAPI={(api) => (excalidrawAPI = api)} />
