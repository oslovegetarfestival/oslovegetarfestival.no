export const slideshow = {
  name: "slideshow",
  title: "Bildekarusell",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
      description: "Valgfri overskrift",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Enable if you want to allow hotspot positioning for each image
          },
        },
      ],
      validation: (Rule) =>
        Rule.min(2).error(
          "Minst to bilder er nødvendig for å lage en bildekarusell"
        ),
      description: "Add images to the slideshow block",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => {
      return {
        title: title || "Bildekarusell",
        media: image,
        subtitle: "Bildekarusell",
      };
    },
  },
};
