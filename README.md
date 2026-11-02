![](https://api.murga.cloud/raster/header?title=PrimaryStyle&subtitle=My%20Brand%20Styleguide)

# PrimaryStyle

PrimaryStyle is the styleguide for my brand: the logo, typography, colour and the RJM pattern
behind everything I make. It expands on the brand page that used to live on [rjm.ie](https://rjm.ie).

| Route         | Contents                                                       |
| ------------- | -------------------------------------------------------------- |
| `/`           | Overview                                                       |
| `/logo`       | Variants, clear space & minimum size, misuse, downloads        |
| `/typography` | Montserrat, JetBrains Mono, Philosopher, Iosevka and the scale |
| `/colour`     | Foundations, the nine primaries with contrast, full scales     |
| `/pattern`    | Pattern playground, construction and slides                    |

# Brand data

- `src/lib/brand/brand.ts`: name, version, primaries, the accent, typefaces and logo files.
- `src/lib/brand/palette.ts`: generated from `node_modules/tailwindcss/theme.css` (Tailwind 4
  OKLCH values plus their sRGB hex). Regenerate it after a Tailwind upgrade.
- `static/logo/`: the downloadable logo files. `static/fonts/`: self-hosted Philosopher.

The accent is set in two places that must agree: `ACCENT` in `brand.ts` and `--color-brand`
in `src/routes/layout.css`.

# Development

```sh
npm install
npm run dev
npm run check && npm run lint
npm test # unit, component and e2e tests
```

# Deployment

The app is built with `adapter-node` and runs from `docker-compose.yml` behind Traefik. Analytics are
configured at runtime with `PUBLIC_ENABLE_ANALYTICS`, `PUBLIC_ANALYTICS_LINK` and
`PUBLIC_ANALYTICS_ID`, so pages are rendered on request rather than prerendered.

# Stack

- Svelte 5
- SvelteKit 3
- Lucide 1
- Shadcn 1
- Tailwind 4
- Vite 8
- Vitest 4
- Playwright 1

Based on my [SK](https://git.rjm.ie/rjmurg/sk) template.
