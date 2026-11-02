<script lang="ts">
	import type { Snippet } from 'svelte';
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';

	let {
		value,
		label = value,
		class: className = '',
		style = '',
		children
	}: {
		value: string;
		label?: string;
		class?: string;
		style?: string;
		children?: Snippet;
	} = $props();

	let copied = $state(false);
	let timeout: ReturnType<typeof setTimeout> | undefined;

	async function copy() {
		await navigator.clipboard.writeText(value);
		copied = true;
		clearTimeout(timeout);
		timeout = setTimeout(() => (copied = false), 1500);
	}
</script>

<button
	type="button"
	onclick={copy}
	class="group inline-flex cursor-copy items-center gap-1.5 text-left {className}"
	{style}
	title="Copy {value}"
>
	{#if children}
		{@render children()}
	{:else}
		<span class="font-mono">{label}</span>
	{/if}
	{#if copied}
		<CheckIcon class="size-3.5 shrink-0" aria-hidden="true" />
		<span class="sr-only" role="status">Copied {value}</span>
	{:else}
		<CopyIcon
			class="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60 group-focus-visible:opacity-60"
			aria-hidden="true"
		/>
	{/if}
</button>
