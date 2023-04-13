export const button = {
  name: "button",
  title: "Knapp med lenke",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Tekst på knapp",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "Lenk til",
      description:
        "Enten en intern lenke, feks: '/billetter' eller en ekstern lenke, feks: 'https://nrk.no'",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
    {
      name: "color",
      title: "Bakgrunnsfarge knapp",
      description:
        "Vanlig farge er grønn. Bruk den oransje sparsomt, og da kun på veldig viktige knapper som feks 'Kjøp billett'",
      type: "string",
      options: {
        list: [
          { title: "Grønn", value: "green" },
          { title: "Oransje", value: "orange" },
        ],
      },
    },
  ],

  preview: {
    select: {
      title: "text",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
        subtitle: "Knapp med lenke",
      };
    },
  },
};
