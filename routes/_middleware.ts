import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 455,
  site: "meu-site",
  domains: ["deco-sites-meu-site.deno.dev"],
});