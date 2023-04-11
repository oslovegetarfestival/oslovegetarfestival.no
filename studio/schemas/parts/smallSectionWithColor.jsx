import { title } from "./title";
import { image } from "./image";
import { richTextObject } from "./richTextObject";

export const smallSectionWithColor = {
  name: "smallSectionWithColor",
  title: "Liten seksjon med farge",
  description: "Bruk denne til feks. kort info om foredragsholdere osv",
  type: "object",
  fields: [
    title({ title: "Overskrift", description: "Feks. navn." }),
    richTextObject,
    {
      name: "bgColor",
      title: "Bakgrunnsfarge på tekst-boks",
      type: "string",
      options: {
        list: ["banana", "lychee"],
      },
      validation: (Rule) => Rule.required(),
    },
    image({ required: true, isFeaturedImage: true }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Liten seksjon med farge",
      };
    },
  },
};
