import { intro } from "../parts/intro";
import { image } from "../parts/image";
import { title } from "../parts/title";

export const frontPage = {
  name: "frontPage",
  title: "Forside",
  type: "document",
  fields: [
    title(),
    intro(),
    {
      title: "Liste med sponsorer",
      name: "sponsorBlock",
      type: "object",
      fields: [
        {
          title: "Tittel (valgfritt)",
          name: "title",
          type: "string",
          description: "For eksempel: Sponsorer",
        },
        {
          title: "Sponsorer",
          name: "sponsors",
          type: "array",
          of: [
            {
              name: "sponsor",
              title: "Sponsor",
              type: "object",
              fields: [
                title({ title: "Navn på sponsor" }),
                image({ title: "Logo" }),
                {
                  title: "Lenke",
                  description: "Lenke til sponsors nettside (valgfritt)",
                  name: "url",
                  type: "url",
                },
              ],
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
