import { contentBlocks } from "../parts/contentBlocks";
import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { seo } from "../parts/seo";
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
      initialValue: new Date().toISOString().slice(0, 10),
      validation: (Rule) => Rule.required(),
    },
    slug({ prefix: "aktuelt" }),
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
