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
    slug({ prefix: "aktuelt" }),
    intro(),
    image(),
    contentBlocks,
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
