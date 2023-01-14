import { richText } from "./richText";

// Stupid Sanity ...
// It won't allow us to use "blockContent" directly in our block module builder
// We have to wrap it in an object first, to avoid the error: "... multidimensional arrays are not currently supported by Sanity"

export const richTextObject = {
  name: "richTextObject",
  title: "Tekst",
  type: "object",
  fields: [richText],
  // Lots of logic below to get the preview to work
  preview: {
    select: {
      blocks: "richText",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === "block"
      );
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
        subtitle: "Tekst",
      };
    },
  },
};
