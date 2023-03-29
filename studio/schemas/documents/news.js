import { contentBlocks } from "../parts/contentBlocks";
import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const news = {
  name: "news",
  title: "Aktuelt",
  type: "document",
  fields: [
    title(),
    {
      name: "publishedDate",
      title: "Publisert dato",
      type: "date",
      description:
        "Publisert dato viser datoen for når dokumentet ble opprettet. Her kan du manuelt overstyre dato om ønskelig",
    },
    slug({ prefix: "aktuelt" }),
    intro(),
    image({ title: "Hovedbilde", includeCaption: true, isFeaturedImage: true }),
    contentBlocks,
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
