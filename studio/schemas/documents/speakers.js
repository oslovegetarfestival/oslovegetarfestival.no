import image from "../parts/image";
import intro from "../parts/intro";
import slug from "../parts/slug";

export default {
  name: "speakers",
  title: "Foredragsholdere",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobTitle",
      title: "Stilling / jobbtittel",
      type: "string",
    },
    slug({ source: "name" }),
    intro(),
    image(),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
