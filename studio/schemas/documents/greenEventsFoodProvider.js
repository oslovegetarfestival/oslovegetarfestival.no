import { contentBlocks } from "../parts/contentBlocks";
import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { seo } from "../parts/seo";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const greenEventsFoodProvider = {
  name: "greenEventsFoodProvider",
  title: "Mattilbyder",
  type: "document",
  fields: [
    title(),
    slug({ prefix: "gront-arrangement/mattilbydere" }),
    intro(),
    image({ title: "Hovedbilde", includeCaption: true, isFeaturedImage: true }),
    {
      title: "Type mattilbyder",
      name: "type",
      type: "reference",
      validation: (Rule) => Rule.required(),
      description: "Hva slags type mattilbyder. Feks: Catering",
      to: [{ type: "greenEventsFoodProviderType" }],
    },
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
