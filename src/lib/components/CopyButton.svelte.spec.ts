import { page } from 'vitest/browser';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import CopyButton from './CopyButton.svelte';

describe('CopyButton.svelte', () => {
	const writeText = vi.fn<(text: string) => Promise<void>>();

	beforeEach(() => {
		writeText.mockReset().mockResolvedValue(undefined);
		Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('shows the value as its label by default', async () => {
		render(CopyButton, { value: '#8E51FF' });

		await expect.element(page.getByRole('button', { name: '#8E51FF' })).toBeInTheDocument();
	});

	it('copies the value and announces it', async () => {
		render(CopyButton, { value: 'oklch(60.6% 0.25 292.717)', label: 'OKLCH' });

		await page.getByRole('button', { name: 'OKLCH' }).click();

		expect(writeText).toHaveBeenCalledWith('oklch(60.6% 0.25 292.717)');
		await expect
			.element(page.getByRole('status'))
			.toHaveTextContent('Copied oklch(60.6% 0.25 292.717)');
	});

	it('resets after a moment', async () => {
		vi.useFakeTimers();
		render(CopyButton, { value: '#000000' });

		await page.getByRole('button').click();
		await expect.element(page.getByRole('status')).toBeInTheDocument();

		await vi.advanceTimersByTimeAsync(1500);
		await expect.element(page.getByRole('status')).not.toBeInTheDocument();
	});
});
