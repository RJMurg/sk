<script lang="ts">
	import type { Snippet } from 'svelte';
	import { BRAND } from '#lib/brand/brand.js';

	let { number, title, children }: { number: string; title: string; children: Snippet } = $props();
</script>

<svelte:head>
	<title>{title} · {BRAND.name}</title>
</svelte:head>

<header class="border-b-4 border-neutral-900 bg-brand text-black">
	<div class="mx-auto flex max-w-7xl flex-col gap-6 px-4 pt-24 pb-10 sm:px-8 md:pt-40">
		<p class="font-mono text-sm font-medium">{number} — {BRAND.name} v{BRAND.version}</p>
		<h1 class="text-5xl leading-none font-black tracking-tight sm:text-8xl md:text-9xl">{title}</h1>
		<div class="max-w-2xl text-lg font-medium md:text-xl">
			{@render children()}
		</div>
	</div>
</header>
