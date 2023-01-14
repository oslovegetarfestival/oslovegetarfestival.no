import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { slug } from "../parts/slug";
import { title } from "../parts/title";
import { blockContent } from "../parts/blockContent";

// This is a generic page, used to create most pages

export const page = {
  name: "page",
  title: "Sider",
  type: "document",
  fields: [
    title(),
    slug(),
    intro(),
    image({ title: "Hovedbilde", name: "mainImage" }),
    blockContent,
    image(),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
