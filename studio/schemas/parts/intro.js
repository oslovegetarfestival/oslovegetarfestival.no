export const intro = ({
  title = "Intro",
  description = "En kort introduksjon",
  required = false,
} = {}) => {
  return {
    name: "intro",
    title: title,
    description: description,
    type: "text",
    rows: 5,
    validation: required ? (Rule) => Rule.required() : null,
  };
};
