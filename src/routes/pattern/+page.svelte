<script lang="ts">
	import { ACCENT, primaries } from '#lib/brand/brand.js';
	import { palette } from '#lib/brand/palette.js';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import Pattern from '#lib/components/Pattern.svelte';
	import Section from '#lib/components/Section.svelte';

	const swatches = primaries
		.filter((family) => family !== 'neutral')
		.map((family) => ({
			name: `${family.charAt(0).toUpperCase() + family.slice(1)}-500`,
			hex: palette[family][5].hex
		}));

	const construction = [
		{ term: 'Text', detail: 'Repeating "RJM" in all caps' },
		{
			term: 'Outline',
			detail: '1px white outline around each letter’s silhouette at 35% opacity, no fill'
		},
		{ term: 'Highlight', detail: 'One row near the middle, filled solid.' },
		{ term: 'Angle', detail: 'Rows rotated 26° clockwise, alternate rows offset' },
		{ term: 'Fade', detail: 'Transparent on the left third, fully visible by 70%' },
		{ term: 'Background', detail: 'Black', code: '#000000' }
	];

	let highlight = $state(palette[ACCENT][5].hex);
	let fade = $state(true);
	let scroll = $state(true);
</script>

<PageHeader number="04" title="Pattern">
	<p>Used for slides, backgrounds and headers.</p>
</PageHeader>

<Section
	id="playground"
	title="Pattern"
	lede="Choose the highlight colour, whether it scrolls, and whether the pattern fades in from the left."
>
	<Pattern
		class="aspect-video w-full rounded-xl border border-neutral-800"
		{highlight}
		{fade}
		{scroll}
	/>

	<div class="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<fieldset class="flex flex-wrap items-center gap-2">
			<legend class="sr-only">Highlight colour</legend>
			{#each swatches as swatch (swatch.hex)}
				<label
					class="size-9 cursor-pointer rounded-full border-2 transition-transform hover:scale-110 has-checked:scale-110 has-checked:border-white has-focus-visible:outline-2 has-focus-visible:outline-white"
					class:border-transparent={highlight !== swatch.hex}
					style:background-color={swatch.hex}
					title={swatch.name}
				>
					<input
						type="radio"
						name="highlight"
						value={swatch.hex}
						bind:group={highlight}
						class="sr-only"
					/>
					<span class="sr-only">{swatch.name}</span>
				</label>
			{/each}
		</fieldset>
		<div class="flex flex-wrap gap-x-6 gap-y-2">
			<label class="flex items-center gap-2 text-sm">
				<input type="checkbox" bind:checked={scroll} class="accent-brand" />
				Scroll the highlight
			</label>
			<label class="flex items-center gap-2 text-sm">
				<input type="checkbox" bind:checked={fade} class="accent-brand" />
				Fade in from the left
			</label>
		</div>
	</div>
</Section>

<Section
	id="construction"
	title="Construction"
	lede="How the pattern is built, so it can be recreated in any tool."
>
	<dl
		class="grid gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-3"
	>
		{#each construction as row (row.term)}
			<div class="bg-black p-5">
				<dt class="text-sm text-neutral-500">{row.term}</dt>
				<dd class="mt-1 font-medium">
					{row.detail}{#if row.code}
						: <span class="font-mono font-normal">{row.code}</span>{/if}
				</dd>
			</div>
		{/each}
	</dl>
</Section>

<Section
	id="in-use"
	title="In use"
	lede="On slides the content sits on the left in white Montserrat, and the pattern fades in across the right half. A licence line goes in the bottom-left corner."
>
	<div class="grid gap-6 lg:grid-cols-2">
		<figure>
			<div
				class="@container relative aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-black"
			>
				{@render slidePattern()}
				<div class="absolute top-[42%] left-[3%] leading-[0.95]">
					<p class="text-[7cqw] font-black uppercase">Four</p>
					<p class="text-[7cqw] uppercase">
						<span class="font-black text-neutral-500">Year</span><span
							class="font-extralight text-neutral-400">Bus</span
						>
					</p>
					<p class="mt-[1.5cqw] text-[4.2cqw]">Ruán Murgatroyd</p>
					<p class="mt-[4cqw] text-[2.2cqw] font-bold">rjm.ie</p>
				</div>
				{@render licence()}
			</div>
			<figcaption class="mt-3 text-sm text-neutral-500">Title & Section slide</figcaption>
		</figure>
		<figure>
			<div
				class="@container relative aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-black"
			>
				{@render slidePattern()}
				<div class="absolute top-[4%] left-[2%] text-[3.8cqw] leading-tight">
					<p class="text-[6cqw] leading-none">
						<span class="font-black uppercase">Thank</span><span
							class="font-extralight text-neutral-500">you!</span
						>
					</p>
					<p class="mt-[4cqw] font-bold">Ruán Murgatroyd</p>
					<p class="italic">rjm.ie</p>
					<p class="mt-[4cqw] font-bold">Contact me:</p>
					<p class="text-blue-500 underline underline-offset-[0.15em]">ruan@example.com</p>
				</div>
				{@render licence()}
			</div>
			<figcaption class="mt-3 text-sm text-neutral-500">Closing slide</figcaption>
		</figure>
	</div>
</Section>

{#snippet slidePattern()}
	<Pattern class="absolute inset-0 text-[4cqw]" fadeFrom={38} fadeTo={70} {highlight} />
{/snippet}

{#snippet licence()}
	<p class="absolute bottom-[1%] left-[1%] text-[1.9cqw]">CC-BY-SA 4.0</p>
{/snippet}
