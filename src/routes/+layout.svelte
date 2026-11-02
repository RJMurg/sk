<script lang="ts">
	import './layout.css';

	import {
		PUBLIC_ENABLE_ANALYTICS,
		PUBLIC_ANALYTICS_LINK,
		PUBLIC_ANALYTICS_ID
	} from '$app/env/public';
	import { asset, resolve } from '$app/paths';
	import { page } from '$app/state';

	import { BRAND } from '#lib/brand/brand.js';
	import LogoMark from '#lib/components/LogoMark.svelte';

	let { children } = $props();

	const links = [
		{ href: '/logo', label: 'Logo' },
		{ href: '/typography', label: 'Typography' },
		{ href: '/colour', label: 'Colour' },
		{ href: '/pattern', label: 'Pattern' }
	] as const;
</script>

<svelte:head>
	<link rel="icon" href={asset('logo/white-72ppi.png')} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />

	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>

	<link href="https://iosevka-webfonts.github.io/iosevka/iosevka.css" rel="stylesheet" />

	{#if PUBLIC_ENABLE_ANALYTICS}
		<script src={PUBLIC_ANALYTICS_LINK} data-site-id={PUBLIC_ANALYTICS_ID} defer>
		</script>
	{/if}
</svelte:head>

<a
	href="#main"
	class="sr-only z-50 bg-white px-4 py-2 text-black focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
	>Skip to content</a
>

<nav
	class="fixed inset-x-0 top-0 z-40 border-b border-neutral-900 bg-black/80 backdrop-blur"
	aria-label="Main"
>
	<div class="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 sm:px-8">
		<a href={resolve('/')} class="flex shrink-0 items-center gap-2 font-black tracking-tight">
			<LogoMark class="h-9 w-auto" label="{BRAND.name} home" />
			<span class="hidden sm:inline"
				>Primary<span class="font-medium text-neutral-500">Style</span></span
			>
		</a>
		<ul class="-mr-2 flex min-w-0 flex-1 justify-end gap-1 overflow-x-auto text-sm font-medium">
			{#each links as link (link.href)}
				{@const current = page.route.id === link.href}
				<li>
					<a
						href={resolve(link.href)}
						aria-current={current ? 'page' : undefined}
						class="block rounded-md px-2 py-1.5 whitespace-nowrap transition-colors hover:text-white sm:px-3 {current
							? 'text-white'
							: 'text-neutral-400'}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<main id="main" class="min-h-screen bg-black text-white">
	{@render children()}
</main>

<footer class="border-t border-neutral-900 bg-black text-sm text-neutral-500">
	<div
		class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8"
	>
		<p>
			<span class="font-black text-white">Primary</span><span class="font-medium">Style</span>
			v{BRAND.version}
		</p>
		<p>
			© {new Date().getFullYear()}
			<a href={BRAND.site} rel="external" class="hover:text-white">{BRAND.owner}</a>
		</p>
	</div>
</footer>
