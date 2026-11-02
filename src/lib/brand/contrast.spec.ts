import { describe, expect, it } from 'vitest';
import { contrast, grade, readableOn } from './contrast.js';
import { palette } from './palette.js';
import { primaries } from './brand.js';

describe('contrast', () => {
	it('matches the WCAG extremes', () => {
		expect(contrast('#000000', '#FFFFFF')).toBeCloseTo(21);
		expect(contrast('#737373', '#737373')).toBe(1);
	});

	it('is symmetric', () => {
		expect(contrast('#FB2C36', '#000000')).toBe(contrast('#000000', '#FB2C36'));
	});

	it('grades ratios', () => {
		expect(grade(21)).toBe('AAA');
		expect(grade(4.5)).toBe('AA');
		expect(grade(3.2)).toBe('AA Large');
		expect(grade(1.5)).toBe('Fail');
	});

	it('picks readable text', () => {
		expect(readableOn('#FFFFFF')).toBe('#000000');
		expect(readableOn('#000000')).toBe('#FFFFFF');
	});
});

describe('palette', () => {
	it('has eleven shades for every primary', () => {
		for (const family of primaries) {
			expect(palette[family].map((s) => s.shade)).toEqual([
				'50',
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900',
				'950'
			]);
			for (const { hex } of palette[family]) expect(hex).toMatch(/^#[0-9A-F]{6}$/);
		}
	});
});
