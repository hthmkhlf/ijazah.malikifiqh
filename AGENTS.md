## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project Tone & Principles

This project prioritizes **clarity, simplicity, and accessibility**. We build for educators and students, so every implementation choice should consider user experience first.

### Core Values

1. **Simplicity Over Complexity** — Choose the simplest solution that solves the problem. Avoid over-engineering.
2. **Security by Default** — Secrets are never committed. Environment variables are mandatory. Validation happens server-side.
3. **Performance Matters** — Static generation (Astro) means fast pages. Keep bundles small, animations smooth.
4. **Clear Code** — Readable > clever. Future maintainers (including future you) should understand intent immediately.
5. **Test Before Deploy** — Verify locally in dev mode before pushing to production.

### Design Philosophy

- Professional but warm aesthetic
- Accessibility-first (WCAG AA compliance)
- Mobile-first responsive design
- Performance-optimized assets
- Clear error messaging for users

## Documentation Structure

Full Astro documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## General Guidelines

- Use TypeScript for type safety
- Prefer Tailwind CSS for styling; custom CSS for complex animations
- Keep components small and focused (single responsibility)
- Use `.astro` components for page structure, `.jsx`/`.tsx` for interactivity
- Environment variables go in `.env.example` (no real values), `.env.local` for dev, GitHub Secrets for production
- Never log API keys, passwords, or personal data to console
- Always re-validate on the backend—don't trust client-side validation alone
