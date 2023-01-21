import { image } from "./image";
import { intro } from "./intro";

export const listWithImageAndText = {
  name: "listWithImageAndText",
  title: "Utlisting: Bilde og tekst",
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
              description: "Feks: Navn",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "subTitle",
              title: "Undertittel (valgfritt)",
              type: "string",
              description: "Feks: Arbeidstittel",
            },
            intro({ title: "Tekst" }),
            image({ required: true }),
          ],
        },
      ],
    },
  ],
};
