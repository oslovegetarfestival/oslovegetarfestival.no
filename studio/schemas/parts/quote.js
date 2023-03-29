export const quote = {
  name: "quote",
  title: "Sitat / Fremhevet tekst",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Tekst",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Opphavsperson (valgfritt)",
      description: 'Feks: "Miljøminister Trine Grønn"',
      type: "string",
    },
    {
      name: "isQuote",
      title: "Vis som sitat (med gåsetegn)",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      quote: "text",
    },
    prepare(value) {
      return {
        title: `${value?.quote}`,
        subtitle: "Sitat / Fremhevet tekst",
      };
    },
  },
};
