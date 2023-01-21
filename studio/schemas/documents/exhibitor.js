import { image } from "../parts/image";
import { intro } from "../parts/intro";
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
    image(),
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
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
