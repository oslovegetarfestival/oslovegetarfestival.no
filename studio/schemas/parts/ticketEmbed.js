export const ticketEmbed = {
  name: "ticketEmbed",
  title: "Billettbestilling",
  description: "Brukes for å embedde billettbestilling fra Checkin",
  type: "object",
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
      description: "Fallback URL til billettbestillingen",
    },
  ],
  preview: {
    select: {
      title: "Billettbestilling",
    },
    prepare() {
      return {
        title: `Billettbestilling`,
        subtitle: "Billettbestilling",
      };
    },
  },
};
