export const quote = {
  name: "quote",
  title: "Sitat",
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
  ],
  preview: {
    select: {
      quote: "text",
    },
    prepare(value) {
      return {
        title: `«${value?.quote}»`,
        subtitle: "Sitat",
      };
    },
  },
};
