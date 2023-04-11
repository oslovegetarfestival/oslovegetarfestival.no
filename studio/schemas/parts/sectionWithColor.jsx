import { title } from "./title";
import { intro } from "./intro";
import { image } from "./image";

export const sectionWithColor = {
  name: "sectionWithColor",
  title: "Seksjon med farge",
  type: "object",
  fields: [
    title({ title: "Overskrift" }),
    intro({ description: "En kort tekst", required: true }),
    {
      name: "bgColor",
      title: "Bakgrunnsfarge på tekst-boks",
      type: "string",
      options: {
        list: ["banana", "lychee"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isReverse",
      title: "Snu rekkefølgen (bilde på høyre side, tekst på venstre)",
      type: "boolean",
    },
    {
      name: "link",
      type: "object",
      title: "Lenke",
      fields: [
        {
          name: "isButton",
          title: "Vis knapp / lenke?",
          type: "boolean",
        },
        {
          name: "text",
          title: "Tekst på knapp",
          type: "string",
          hidden: ({ parent }) => !parent?.isButton,
        },
        {
          name: "url",
          title: "Lenk til",
          description:
            "Enten en intern lenke, feks: '/billetter' eller en ekstern lenke, feks: 'https://nrk.no'",
          type: "url",
          hidden: ({ parent }) => !parent?.isButton,
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
      ],
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
        subtitle: "Seksjon med farge",
      };
    },
  },
};
