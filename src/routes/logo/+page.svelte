<script lang="ts">
	import { asset } from '$app/paths';
	import Download from '@lucide/svelte/icons/download';
	import X from '@lucide/svelte/icons/x';

	import { ACCENT, logoFiles } from '#lib/brand/brand.js';
	import { palette } from '#lib/brand/palette.js';
	import LogoMark from '#lib/components/LogoMark.svelte';
	import PageHeader from '#lib/components/PageHeader.svelte';
	import Pattern from '#lib/components/Pattern.svelte';
	import Section from '#lib/components/Section.svelte';

	// Ink bounds of the mark inside its 160 × 173.72 viewBox, and the clear-space unit:
	// the height of the dot on the j.
	const mark = { x: 49.22, y: 33.66, width: 62.78, height: 120.18 };
	const unit = 18.79;

	const sizes = [128, 64, 40, 24];

	const misuse = [
		{ label: 'Don’t stretch or squash', style: 'transform: scaleX(1.6)' },
		{ label: 'Don’t rotate', style: 'transform: rotate(-20deg)' },
		{ label: 'Don’t recolour', style: `color: ${palette.orange[5].hex}` },
		{ label: 'Don’t use low contrast', style: `color: ${palette.neutral[8].hex}` },
		{
			label: 'Don’t add effects',
			style: `filter: drop-shadow(4px 4px 0 ${palette.blue[5].hex}) drop-shadow(0 0 12px ${palette.violet[5].hex})`
		}
	];
</script>

<PageHeader number="01" title="Logo">
	<p>Putting RJM together into one single glyph.</p>
</PageHeader>

<Section
	id="variants"
	title="Variants"
	lede="The logo appears in white or black, depending on the background."
>
	<div class="grid gap-4 md:grid-cols-2">
		<figure class="overflow-hidden rounded-xl border border-neutral-800">
			<div class="flex aspect-[4/3] items-center justify-center bg-black text-white">
				<LogoMark class="h-1/2 w-auto" label="White logo on black" />
			</div>
			<figcaption class="flex justify-between border-t border-neutral-800 p-4 text-sm">
				<span class="font-semibold">White</span>
				<span class="text-neutral-500">On black and dark imagery</span>
			</figcaption>
		</figure>
		<figure class="overflow-hidden rounded-xl border border-neutral-800">
			<div class="flex aspect-[4/3] items-center justify-center bg-white text-black">
				<LogoMark class="h-1/2 w-auto" label="Black logo on white" />
			</div>
			<figcaption class="flex justify-between border-t border-neutral-800 p-4 text-sm">
				<span class="font-semibold">Black</span>
				<span class="text-neutral-500">On white, paper and light imagery</span>
			</figcaption>
		</figure>
	</div>
</Section>

<Section
	id="clear-space"
	title="Clear space & size"
	lede="Keep a margin at least the height of the j's dot (x) on every side, and never set the mark smaller than 24 px tall on screen or 10 mm in print."
>
	<div class="grid gap-10 md:grid-cols-2">
		<div class="relative mx-auto aspect-[160/173.72] w-full max-w-sm">
			<!-- z-10 keeps the mark above the tinted clear-space guides -->
			<LogoMark class="absolute inset-0 z-10 h-full w-full" />
			<svg viewBox="0 0 160 173.72" class="absolute inset-0 h-full w-full" aria-hidden="true">
				<rect
					x={mark.x - unit}
					y={mark.y - unit}
					width={mark.width + unit * 2}
					height={mark.height + unit * 2}
					fill={palette[ACCENT][5].hex}
					fill-opacity="0.12"
					stroke={palette[ACCENT][5].hex}
					stroke-width="0.5"
					stroke-dasharray="2 2"
				/>
				<rect
					x={mark.x}
					y={mark.y}
					width={mark.width}
					height={mark.height}
					fill="none"
					stroke="white"
					stroke-opacity="0.4"
					stroke-width="0.4"
				/>
				<g
					fill={palette[ACCENT][5].hex}
					font-family="JetBrains Mono, monospace"
					font-size="6"
					text-anchor="middle"
				>
					<text x={mark.x + mark.width / 2} y={mark.y - unit / 2 + 2}>x</text>
					<text x={mark.x + mark.width / 2} y={mark.y + mark.height + unit / 2 + 2}>x</text>
					<text x={mark.x - unit / 2} y={mark.y + mark.height / 2 + 2}>x</text>
					<text x={mark.x + mark.width + unit / 2} y={mark.y + mark.height / 2 + 2}>x</text>
				</g>
			</svg>
		</div>

		<div class="flex flex-wrap items-end gap-8 self-center">
			{#each sizes as size (size)}
				<figure class="flex flex-col items-center gap-3">
					<LogoMark style="height: {size}px; width: auto" />
					<figcaption class="font-mono text-sm text-neutral-500">
						{size}px{size === 24 ? ' · min' : ''}
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</Section>

<Section id="misuse" title="Misuse" lede="The logo should not be modified in any way.">
	<ul class="grid grid-cols-2 gap-4 md:grid-cols-3">
		{#each misuse as item (item.label)}
			<li class="overflow-hidden rounded-xl border border-neutral-800">
				<div class="flex aspect-square items-center justify-center">
					<LogoMark class="h-1/2 w-auto" style={item.style} label="Incorrect use: {item.label}" />
				</div>
				<p class="flex items-center gap-2 border-t border-neutral-800 p-4 text-sm">
					<X class="size-4 shrink-0 text-red-500" aria-hidden="true" />
					{item.label}
				</p>
			</li>
		{/each}
		<li class="overflow-hidden rounded-xl border border-neutral-800">
			<div class="relative flex aspect-square items-center justify-center">
				<Pattern class="absolute inset-0" fade={false} highlight={palette.neutral[2].hex} />
				<LogoMark class="relative h-1/2 w-auto" label="Incorrect use: on a busy background" />
			</div>
			<p class="flex items-center gap-2 border-t border-neutral-800 p-4 text-sm">
				<X class="size-4 shrink-0 text-red-500" aria-hidden="true" />
				Don’t place on busy backgrounds
			</p>
		</li>
	</ul>
</Section>

<Section
	id="downloads"
	title="Downloads"
	lede="Use SVG wherever it's supported. The SVGs set the r and m as live text, so install Philosopher first or use a PNG."
>
	<div class="grid gap-8 md:grid-cols-2">
		{#each logoFiles as group (group.variant)}
			<div>
				<h3 class="text-2xl font-bold">{group.variant}</h3>
				<p class="text-sm text-neutral-500">{group.use}</p>
				<ul class="mt-4 divide-y divide-neutral-900 border-y border-neutral-900">
					{#each group.files as file (file.file)}
						<li>
							<a
								href={asset(file.path)}
								download
								class="group flex items-center gap-4 py-3 hover:text-brand"
							>
								<span class="w-12 font-mono text-sm font-semibold">{file.format}</span>
								<span class="flex-1 font-mono text-sm text-neutral-400 group-hover:text-brand"
									>{file.detail}</span
								>
								<span class="hidden font-mono text-xs text-neutral-600 sm:inline">{file.file}</span>
								<Download class="size-4" aria-hidden="true" />
								<span class="sr-only">Download {file.file}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>
