import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { contentBlocks } from "../parts/contentBlocks";
import { slug } from "../parts/slug";
import { title } from "../parts/title";
import { seo } from "../parts/seo";

// This is a generic page used for the "Grønt arrangement" microsite
export const greenEvents = {
  name: "greenEvents",
  title: "Grønt arrangement",
  type: "document",
  fields: [
    title(),
    slug({ prefix: "gront-arrangement" }),
    intro(),
    image({ title: "Hovedbilde", includeCaption: true, isFeaturedImage: true }),
    contentBlocks,
    seo,
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
