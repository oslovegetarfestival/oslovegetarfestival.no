import { image } from "../parts/image";
import { seo } from "../parts/seo";
import { title } from "../parts/title";

export const frontPage = {
  name: "frontPage",
  title: "Forside",
  type: "document",
  fields: [
    title(),
    {
      title: "Fremhevet aktuelt",
      name: "promotedNews",
      type: "array",
      validation: (Rule) => [Rule.required(), Rule.length(4)],
      description:
        "Velg fire fremhevede aktueltsaker. Du kan endre rekkefølgen for å styre visningen på forsiden.",
      of: [
        {
          type: "reference",
          to: [{ type: "news" }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      title: "Fremhevet arrangement",
      name: "promotedEvents",
      type: "array",
      validation: (Rule) => [Rule.required(), Rule.length(4)],
      description:
        "Velg fire fremhevede arrangementer. Du kan endre rekkefølgen for å styre visningen på forsiden.",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      title: "Fremhevet utstiller",
      name: "promotedExhibitors",
      type: "array",
      validation: (Rule) => [Rule.required(), Rule.length(4)],
      description:
        "Velg fire fremhevede utstillere. Du kan endre rekkefølgen for å styre visningen på forsiden.",
      of: [
        {
          type: "reference",
          to: [{ type: "exhibitor" }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
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
    seo,
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
