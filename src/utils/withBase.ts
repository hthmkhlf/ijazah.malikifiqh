/**
 * Prefixes a path under public/ with the site's base path (astro.config.mjs `base`),
 * so links to public assets still resolve correctly when deployed under a subpath
 * (e.g. GitHub Pages at /ijazah.malikifiqh/). Root-relative paths like `/images/x.jpg`
 * only work locally, where the base is `/`.
 */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
