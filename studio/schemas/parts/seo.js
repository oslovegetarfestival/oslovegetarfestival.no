export const seo = {
  name: "seo",
  title: "SEO",
  type: "object",
  description:
    "Brukes dersom du ønsker å overstyre hvordan siden vises på Google, eller når den deles på Facebook og sosiale medier.",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "SEO tittel",
      description: "Overstyrer sidens tittel for SEO",
      type: "string",
    },
    {
      name: "description",
      title: "SEO ingress ",
      type: "text",
      description:
        "Overstyrer sidens ingress (hvis den finnes). Vises på Google resultater og ved deling. Maks 160 tegn",
    },
    {
      name: "image",
      title: "SEO bilde",
      type: "image",
      description: "Overstyrer sidens hovedbilde (hvis den finnes) for SEO",
    },
    {
      name: "hidden",
      title: "Skjul siden fra søkemotorer",
      description:
        "Siden vil skjules fra søk på Google og lignende (men fremdeles være tilgjengelig med direktelenke).",
      type: "boolean",
    },
  ],
};
