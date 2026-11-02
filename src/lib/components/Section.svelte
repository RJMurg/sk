<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		id,
		lede,
		children
	}: { title: string; id: string; lede?: string; children: Snippet } = $props();
</script>

<section {id} class="scroll-mt-20 border-b border-neutral-900">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-8 md:py-24">
		<h2 class="text-4xl font-bold tracking-tight md:text-5xl">
			<a href="#{id}" class="hover:text-brand">{title}</a>
		</h2>
		{#if lede}
			<p class="mt-4 max-w-2xl text-lg text-neutral-400">{lede}</p>
		{/if}
		<div class="mt-10">
			{@render children()}
		</div>
	</div>
</section>
