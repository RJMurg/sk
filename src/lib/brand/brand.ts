import type { AssetPath } from '$app/types';
import { palette } from './palette.js';

export const BRAND = {
	name: 'PrimaryStyle',
	version: '2.2',
	owner: 'Ruán Murgatroyd',
	site: 'https://rjm.ie'
} as const;

export type Family = keyof typeof palette;

/** The nine primary colours, in the order they are presented. */
export const primaries: Family[] = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'violet',
	'neutral',
	'indigo',
	'teal'
];

/** Violet-500 is the accent used for page headers, highlights and the pattern. */
export const ACCENT: Family = 'violet';

export const foundations = [
	{ name: 'Black', hex: '#000000', oklch: 'oklch(0% 0 0)', usage: 'Default background' },
	{ name: 'White', hex: '#FFFFFF', oklch: 'oklch(100% 0 0)', usage: 'Default text & logo' }
] as const;

export interface Weight {
	value: number;
	name: string;
	italic?: boolean;
}

export interface Typeface {
	name: string;
	role: string;
	usage: string;
	family: string;
	source: { label: string; href: string };
	weights: Weight[];
}

export const typefaces: Typeface[] = [
	{
		name: 'Montserrat',
		role: 'Primary typeface',
		usage: 'The default for everything. Titles, content and more.',
		family: 'var(--font-sans)',
		source: { label: 'Google Fonts', href: 'https://fonts.google.com/specimen/Montserrat' },
		weights: [
			{ value: 200, name: 'Extra Light' },
			{ value: 300, name: 'Light' },
			{ value: 400, name: 'Regular' },
			{ value: 400, name: 'Regular Italic', italic: true },
			{ value: 500, name: 'Medium' },
			{ value: 600, name: 'Semi-Bold' },
			{ value: 700, name: 'Bold' },
			{ value: 800, name: 'Extra Bold' },
			{ value: 900, name: 'Black' }
		]
	},
	{
		name: 'JetBrains Mono',
		role: 'Code',
		usage: 'For code samples, terminals, or anything where clarity is key.',
		family: 'var(--font-mono)',
		source: { label: 'Google Fonts', href: 'https://fonts.google.com/specimen/JetBrains+Mono' },
		weights: [
			{ value: 100, name: 'Thin' },
			{ value: 200, name: 'Extra Light' },
			{ value: 300, name: 'Light' },
			{ value: 400, name: 'Regular' },
			{ value: 400, name: 'Regular Italic', italic: true },
			{ value: 500, name: 'Medium' },
			{ value: 600, name: 'Semi-Bold' },
			{ value: 700, name: 'Bold' },
			{ value: 800, name: 'Extra Bold' }
		]
	},
	{
		name: 'Philosopher',
		role: 'Logo & display',
		usage: 'Used to build the logo',
		family: 'var(--font-display)',
		source: { label: 'Google Fonts', href: 'https://fonts.google.com/specimen/Philosopher' },
		weights: [
			{ value: 400, name: 'Regular' },
			{ value: 700, name: 'Bold' },
			{ value: 400, name: 'Regular Italic', italic: true },
			{ value: 700, name: 'Bold Italic', italic: true }
		]
	}
];

export interface LogoFile {
	file: string;
	path: AssetPath;
	format: 'SVG' | 'PNG' | 'WebP';
	detail: string;
}

export const logoFiles: { variant: 'White' | 'Black'; use: string; files: LogoFile[] }[] = [
	{
		variant: 'White',
		use: 'For dark backgrounds',
		files: [
			{ file: 'white.svg', path: 'logo/white.svg', format: 'SVG', detail: 'Vector' },
			{
				file: 'white-300ppi.png',
				path: 'logo/white-300ppi.png',
				format: 'PNG',
				detail: '667 × 724 · 300 ppi'
			},
			{
				file: 'white-72ppi.png',
				path: 'logo/white-72ppi.png',
				format: 'PNG',
				detail: '160 × 174 · 72 ppi'
			},
			{ file: 'white.webp', path: 'logo/white.webp', format: 'WebP', detail: '334 × 363' }
		]
	},
	{
		variant: 'Black',
		use: 'For light backgrounds',
		files: [
			{ file: 'black.svg', path: 'logo/black.svg', format: 'SVG', detail: 'Vector' },
			{
				file: 'black-300ppi.png',
				path: 'logo/black-300ppi.png',
				format: 'PNG',
				detail: '667 × 724 · 300 ppi'
			},
			{
				file: 'black-150ppi.png',
				path: 'logo/black-150ppi.png',
				format: 'PNG',
				detail: '334 × 362 · 150 ppi'
			},
			{
				file: 'black-72ppi.png',
				path: 'logo/black-72ppi.png',
				format: 'PNG',
				detail: '160 × 174 · 72 ppi'
			},
			{ file: 'black.webp', path: 'logo/black.webp', format: 'WebP', detail: '334 × 363' }
		]
	}
];
