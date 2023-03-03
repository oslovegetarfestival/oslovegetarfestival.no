import { intro } from "./intro";
import { richTextObject } from "./richTextObject";

export const accordion = {
  name: "accordion",
  title: "Trekkspill-liste",
  description: "Denne kan brukes til å f.eks. lage FAQ med spørsmål og svar",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift (valgfritt)",
      type: "string",
      description: "Feks: Ofte stilte spørsmål",
    },
    {
      name: "list",
      type: "array",
      title: "Liste",
      of: [
        {
          name: "listItem",
          title: "Spørsmål og svar",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Tittel",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            richTextObject,
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
        title: title || "",
        subtitle: "Trekkspill-liste",
      };
    },
  },
};
