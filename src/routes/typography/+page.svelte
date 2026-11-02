<script lang="ts">
	import { typefaces } from '#lib/brand/brand.js';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import Section from '#lib/components/Section.svelte';

	const DEFAULT_SAMPLE = 'The quick brown fox jumps over the lazy dog';

	let sample = $state(DEFAULT_SAMPLE);
	let size = $state(40);

	const text = $derived(sample.trim() || DEFAULT_SAMPLE);

	const charset = [
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		'abcdefghijklmnopqrstuvwxyz',
		'0123456789 áéíóú ÁÉÍÓÚ',
		'!?.,;:’“”()[]{}<>/\\|@#&*+-=_€£$%'
	];

	const scale = [
		{
			name: 'Display',
			spec: 'Montserrat Black · 96px',
			class: 'text-8xl font-black tracking-tight'
		},
		{
			name: 'Heading 1',
			spec: 'Montserrat Bold · 60px',
			class: 'text-6xl font-bold tracking-tight'
		},
		{ name: 'Heading 2', spec: 'Montserrat Bold · 36px', class: 'text-4xl font-bold' },
		{ name: 'Heading 3', spec: 'Montserrat Semi-Bold · 24px', class: 'text-2xl font-semibold' },
		{ name: 'Body', spec: 'Montserrat Regular · 18px', class: 'text-lg' },
		{
			name: 'Caption',
			spec: 'Montserrat Regular · 14px · Neutral-400',
			class: 'text-sm text-neutral-400'
		},
		{ name: 'Code', spec: 'JetBrains Mono Regular · 14px', class: 'font-mono text-sm' }
	];
</script>

<PageHeader number="02" title="Typography">
	<p>Three different fonts, each for a different purpose.</p>
</PageHeader>

<div class="sticky top-14 z-30 border-b border-neutral-900 bg-black/90 backdrop-blur">
	<div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-8">
		<label class="flex flex-1 items-center gap-3">
			<span class="text-sm text-neutral-500">Sample</span>
			<input
				bind:value={sample}
				class="min-w-0 flex-1 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-sm focus:border-neutral-600 focus:outline-none"
			/>
		</label>
		<label class="flex items-center gap-3">
			<span class="text-sm text-neutral-500">Size</span>
			<input type="range" min="12" max="96" bind:value={size} class="w-32 accent-brand" />
			<span class="w-12 font-mono text-sm text-neutral-400">{size}px</span>
		</label>
	</div>
</div>

{#each typefaces as face, i (face.name)}
	<section
		id={face.name.toLowerCase().replace(/\s+/g, '-')}
		class="scroll-mt-32 border-b border-neutral-900"
		style:font-family={face.family}
	>
		<div class="mx-auto max-w-7xl px-4 py-16 sm:px-8 md:py-24">
			<div class="grid gap-8 md:grid-cols-[1fr_2fr]">
				<div class="font-sans">
					<p class="font-mono text-sm text-brand">0{i + 1} · {face.role}</p>
					<h2
						class="mt-2 text-5xl font-bold tracking-tight md:text-6xl"
						style:font-family={face.family}
					>
						{face.name}
					</h2>
					<p class="mt-4 text-neutral-400">{face.usage}</p>
					<a
						href={face.source.href}
						rel="external"
						class="mt-4 inline-block text-sm text-neutral-500 underline-offset-4 hover:text-white hover:underline"
						>Get it from {face.source.label}</a
					>
				</div>
				<p class="text-[10rem] leading-none md:text-right md:text-[14rem]" aria-hidden="true">Aa</p>
			</div>

			<ul class="mt-12 divide-y divide-neutral-900 border-y border-neutral-900">
				{#each face.weights as weight (weight.name)}
					<li class="grid gap-2 py-5 md:grid-cols-[12rem_1fr] md:items-baseline">
						<span class="font-sans text-sm text-neutral-500">
							{weight.name} · <span class="font-mono">{weight.value}</span>
						</span>
						<span
							class="min-w-0 overflow-hidden leading-tight text-ellipsis whitespace-nowrap"
							style:font-weight={weight.value}
							style:font-style={weight.italic ? 'italic' : 'normal'}
							style:font-size="{size}px">{text}</span
						>
					</li>
				{/each}
			</ul>

			<div class="mt-12 space-y-1 text-2xl break-all text-neutral-300 md:text-3xl">
				{#each charset as line (line)}
					<p>{line}</p>
				{/each}
			</div>
		</div>
	</section>
{/each}

<Section
	id="lockup"
	title="Title lockup"
	lede="Inspired by NASA's new brand identity. A heavy-weight first word, with a lighter-weighted second."
>
	<p class="text-4xl tracking-tight sm:text-6xl md:text-8xl">
		<span class="font-black">Primary</span><span class="font-medium text-neutral-500">Style</span>
	</p>
</Section>

<Section id="scale" title="Type scale" lede="The sizes used on the web, from display to captions.">
	<ul class="divide-y divide-neutral-900 border-y border-neutral-900">
		{#each scale as step (step.name)}
			<li class="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:items-baseline">
				<div>
					<p class="font-semibold">{step.name}</p>
					<p class="text-sm text-neutral-500">{step.spec}</p>
				</div>
				<p class="min-w-0 truncate {step.class}">{text}</p>
			</li>
		{/each}
	</ul>
</Section>
