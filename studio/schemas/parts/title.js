export const title = ({ title = "Tittel" } = {}) => {
  return {
    name: "title",
    title: title,
    type: "string",
    validation: (Rule) => Rule.required(),
  };
};
