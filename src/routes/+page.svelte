<script lang="ts">
	import { resolve } from '$app/paths';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	import { ACCENT, BRAND, primaries, typefaces } from '#lib/brand/brand.js';
	import { palette } from '#lib/brand/palette.js';
	import LogoMark from '#lib/components/LogoMark.svelte';
	import Pattern from '#lib/components/Pattern.svelte';

	const accentName = `${ACCENT.charAt(0).toUpperCase() + ACCENT.slice(1)}-500`;

	// `font` sets the value in that face; `code` is a technical value, always in mono.
	const glance: { label: string; value: string; font?: string; code?: string }[] = [
		{ label: 'Primary typeface', value: 'Montserrat' },
		{ label: 'Code typeface', value: 'JetBrains Mono', font: 'var(--font-mono)' },
		{ label: 'Accent', value: accentName, code: palette[ACCENT][5].hex },
		{ label: 'Background', value: 'Black', code: '#000000' }
	];
</script>

<svelte:head>
	<title>{BRAND.name}</title>
	<meta
		name="description"
		content="{BRAND.name} v{BRAND.version}: the logo, typography, colour and pattern behind {BRAND.owner}'s work."
	/>
</svelte:head>

<header
	class="relative flex min-h-svh flex-col justify-end overflow-hidden border-b-4 border-neutral-900"
>
	<Pattern class="absolute inset-0 opacity-60" scroll />
	<div class="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-12 sm:px-8 md:pb-20">
		<h1
			class="flex flex-col text-7xl leading-[0.9] tracking-tight sm:text-8xl lg:block lg:text-9xl"
		>
			<span class="font-black">Primary</span><span class="font-medium text-neutral-500">Style</span>
		</h1>
		<p class="mt-4 font-mono text-sm text-neutral-400">v{BRAND.version}</p>
		<p class="mt-8 max-w-xl text-xl font-light md:text-2xl">
			The visual identity behind everything I make.
		</p>
	</div>
</header>

<section class="border-b border-neutral-900">
	<dl class="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-neutral-900 md:grid-cols-4">
		{#each glance as item (item.label)}
			<div class="bg-black px-4 py-8 sm:px-8">
				<dt class="text-sm text-neutral-500">{item.label}</dt>
				<dd class="mt-1 text-lg font-semibold" style:font-family={item.font}>
					{item.value}{#if item.code}
						: <span class="font-mono font-normal">{item.code}</span>{/if}
				</dd>
			</div>
		{/each}
	</dl>
</section>

<section class="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-8 md:grid-cols-2 md:py-24">
	<a
		href={resolve('/logo')}
		class="group flex min-h-80 flex-col justify-between rounded-xl border border-neutral-900 p-6 transition-colors hover:border-neutral-700"
	>
		<div class="flex flex-1 items-center justify-center py-6">
			<LogoMark class="h-40 w-auto transition-transform duration-300 group-hover:scale-105" />
		</div>
		<span class="flex items-center justify-between text-2xl font-bold">
			Logo <ArrowRight class="size-6 transition-transform group-hover:translate-x-1" />
		</span>
	</a>

	<a
		href={resolve('/typography')}
		class="group flex min-h-80 flex-col justify-between rounded-xl border border-neutral-900 p-6 transition-colors hover:border-neutral-700"
	>
		<div class="flex min-w-0 flex-1 items-end gap-4 py-6">
			{#each typefaces as face (face.name)}
				<span class="text-5xl leading-none sm:text-6xl md:text-7xl" style:font-family={face.family}
					>Aa</span
				>
			{/each}
		</div>
		<span class="flex items-center justify-between text-2xl font-bold">
			Typography <ArrowRight class="size-6 transition-transform group-hover:translate-x-1" />
		</span>
	</a>

	<a
		href={resolve('/colour')}
		class="group flex min-h-80 flex-col justify-between rounded-xl border border-neutral-900 p-6 transition-colors hover:border-neutral-700"
	>
		<div class="flex flex-1 items-stretch gap-1.5 py-6">
			{#each primaries as family (family)}
				<span
					class="flex-1 rounded-md transition-[flex-grow] duration-300 hover:grow-[2]"
					style:background-color={palette[family][5].hex}
				></span>
			{/each}
		</div>
		<span class="flex items-center justify-between text-2xl font-bold">
			Colour <ArrowRight class="size-6 transition-transform group-hover:translate-x-1" />
		</span>
	</a>

	<a
		href={resolve('/pattern')}
		class="group flex min-h-80 flex-col justify-between overflow-hidden rounded-xl border border-neutral-900 transition-colors hover:border-neutral-700"
	>
		<Pattern class="min-h-48 flex-1" />
		<span class="flex items-center justify-between p-6 text-2xl font-bold">
			Pattern <ArrowRight class="size-6 transition-transform group-hover:translate-x-1" />
		</span>
	</a>
</section>
