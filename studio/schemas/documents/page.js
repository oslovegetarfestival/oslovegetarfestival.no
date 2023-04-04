import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { contentBlocks } from "../parts/contentBlocks";
import { slug } from "../parts/slug";
import { title } from "../parts/title";
import { seo } from "../parts/seo";

// This is a generic page, used to create most pages
export const page = {
  name: "page",
  title: "Sider",
  type: "document",
  fields: [
    title(),
    slug(),
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
