import { expect, test } from '@playwright/test';

const routes = [
	{ path: '/', h1: 'PrimaryStyle' },
	{ path: '/logo', h1: 'Logo' },
	{ path: '/typography', h1: 'Typography' },
	{ path: '/colour', h1: 'Colour' },
	{ path: '/pattern', h1: 'Pattern' }
];

for (const route of routes) {
	test.describe(route.path, () => {
		test('renders its h1', async ({ page }) => {
			await page.goto(route.path);
			await expect(page.getByRole('heading', { level: 1 })).toHaveText(route.h1);
		});

		test('does not scroll sideways on a phone', async ({ page }) => {
			await page.setViewportSize({ width: 390, height: 844 });
			await page.goto(route.path);
			await page.evaluate(() => document.fonts.ready);
			const width = await page.evaluate(() => document.documentElement.scrollWidth);
			expect(width).toBeLessThanOrEqual(390);
		});
	});
}
