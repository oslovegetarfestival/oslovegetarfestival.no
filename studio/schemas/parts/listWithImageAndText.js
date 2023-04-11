import { image } from "./image";
import { intro } from "./intro";

export const listWithImageAndText = {
  name: "listWithImageAndText",
  title: "Liste med runde bilder og tekst",
  description: "Denne kan brukes feks til å lage ansattlister og lignende",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift (valgfritt)",
      type: "string",
      description: "Feks: Teamet bak festivalen",
    },
    {
      name: "list",
      type: "array",
      title: "Liste",
      of: [
        {
          name: "listItem",
          title: "Bilde og tekst",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tittel",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "subTitle",
              title: "Undertittel (valgfritt)",
              type: "string",
            },
            intro({ title: "Tekst" }),
            image({ required: true, isFeaturedImage: true }),
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Liste med runde bilder og tekst",
      };
    },
  },
};
