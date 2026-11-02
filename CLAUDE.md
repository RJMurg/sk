## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, vitest, playwright, tailwindcss, mcp

## Project Notes

- PrimaryStyle brand styleguide (SvelteKit 3, Svelte 5, Tailwind 4, adapter-node), forked from the SK template.
- Brand data lives in `src/lib/brand/`. `palette.ts` is generated from Tailwind 4's `theme.css`; don't hand-edit it.
- The accent is Violet-500: `ACCENT` in `brand.ts` and `--color-brand` in `src/routes/layout.css` must match. Use `text-brand` / `bg-brand`, not raw `violet-500`.
- Use `font-mono` for code, hex, OKLCH and other technical values.
- The `RJM` pattern (`Pattern.svelte`) outlines text with an SVG filter, not `-webkit-text-stroke`: Montserrat's overlapping contours show through a stroke.
- Env vars are runtime (`src/env.ts`, `$app/env/public`), so pages are not prerendered. `$env/dynamic/*` no longer exists in Kit 3.
- Never include the signature files from the brand source folder.

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
