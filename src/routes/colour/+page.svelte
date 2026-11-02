<script lang="ts">
	import { ACCENT, foundations, primaries } from '#lib/brand/brand.js';
	import { contrast, grade, readableOn } from '#lib/brand/contrast.js';
	import { palette } from '#lib/brand/palette.js';
	import CopyButton from '#lib/components/CopyButton.svelte';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import Section from '#lib/components/Section.svelte';

	const title = (family: string) => family.charAt(0).toUpperCase() + family.slice(1);
</script>

<PageHeader number="03" title="Colour">
	<p>
		Black and white as the main colours, with additional for accents, warnings and more. Click the
		values to copy.
	</p>
</PageHeader>

<Section
	id="foundations"
	title="Foundations"
	lede="Most surfaces are white type on a black background."
>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each foundations as colour (colour.name)}
			<div class="overflow-hidden rounded-xl border border-neutral-800">
				<div
					class="flex aspect-[3/1] items-end p-5 text-3xl font-black"
					style:background-color={colour.hex}
					style:color={readableOn(colour.hex)}
				>
					{colour.name}
				</div>
				<dl class="grid grid-cols-[6rem_1fr] gap-y-1 p-5 text-sm">
					<dt class="text-neutral-500">Use</dt>
					<dd>{colour.usage}</dd>
					<dt class="text-neutral-500">HEX</dt>
					<dd><CopyButton value={colour.hex} /></dd>
					<dt class="text-neutral-500">OKLCH</dt>
					<dd><CopyButton value={colour.oklch} /></dd>
				</dl>
			</div>
		{/each}
	</div>
</Section>

<Section
	id="primaries"
	title="Primaries"
	lede="Using the default 500-values of each Tailwind colour. Contrast values show WCAG compliance for white and black."
>
	<ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each primaries as family (family)}
			{@const colour = palette[family][5]}
			{@const onWhite = contrast(colour.hex, '#FFFFFF')}
			{@const onBlack = contrast(colour.hex, '#000000')}
			<li class="overflow-hidden rounded-xl border border-neutral-800">
				<div
					class="relative flex aspect-[4/3] flex-col justify-between p-5"
					style:background-color={colour.hex}
					style:color={readableOn(colour.hex)}
				>
					{#if family === ACCENT}
						<span
							class="self-start rounded-full border border-current px-2 py-0.5 text-xs font-semibold"
							>Accent</span
						>
					{:else}
						<span></span>
					{/if}
					<p class="text-3xl font-black">{title(family)}-500</p>
				</div>
				<dl class="grid grid-cols-[6rem_1fr] gap-y-1 p-5 text-sm">
					<dt class="text-neutral-500">HEX</dt>
					<dd><CopyButton value={colour.hex} /></dd>
					<dt class="text-neutral-500">OKLCH</dt>
					<dd><CopyButton value={colour.oklch} /></dd>
					<dt class="text-neutral-500">Contrast</dt>
					<dd class="flex flex-wrap gap-x-4 font-mono">
						<span>
							<span class="inline-block size-2.5 rounded-full bg-white"></span>
							{onWhite.toFixed(1)} <span class="text-neutral-500">{grade(onWhite)}</span>
						</span>
						<span>
							<span class="inline-block size-2.5 rounded-full border border-neutral-600 bg-black"
							></span>
							{onBlack.toFixed(1)} <span class="text-neutral-500">{grade(onBlack)}</span>
						</span>
					</dd>
				</dl>
			</li>
		{/each}
	</ul>
</Section>

<Section
	id="scales"
	title="Scales"
	lede="Each primary colour's range between darkest and lightest. Click to copy."
>
	<div class="space-y-6">
		{#each primaries as family (family)}
			<div>
				<h3 class="mb-2 text-sm font-semibold">{title(family)}</h3>
				<ul class="grid grid-cols-4 gap-1 sm:grid-cols-6 lg:grid-cols-11">
					{#each palette[family] as colour (colour.shade)}
						<li>
							<CopyButton
								value={colour.hex}
								class="h-20 w-full items-end! justify-between rounded-md p-2 text-xs"
								style="background-color: {colour.hex}; color: {readableOn(colour.hex)}"
							>
								<span class="flex flex-col">
									<span class="font-semibold">{colour.shade}</span>
									<span class="font-mono">{colour.hex}</span>
								</span>
							</CopyButton>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>
