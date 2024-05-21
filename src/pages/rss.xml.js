import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "Dev2Go portfolio | Blog",
    description: "Mon Portfolio de développeur web",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>fr-fr</language>`,
  })
}
