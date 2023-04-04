import { contentBlocks } from "../parts/contentBlocks";
import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { seo } from "../parts/seo";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const exhibitor = {
  name: "exhibitor",
  title: "Utstillere",
  type: "document",
  initialValue: {
    sponsor: false,
  },
  fields: [
    title(),
    slug({ prefix: "utstillere" }),
    intro(),
    image({ title: "Hovedbilde", includeCaption: true, isFeaturedImage: true }),
    {
      title: "Type utstiller",
      name: "type",
      type: "reference",
      validation: (Rule) => Rule.required(),
      description: "Hva slags type utstiller. Feks: Restaurantbod",
      to: [{ type: "exhibitorType" }],
    },
    {
      title: "Dette er en sponsor",
      name: "sponsor",
      type: "boolean",
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
