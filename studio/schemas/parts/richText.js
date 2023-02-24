export const richText = {
  title: "Brødtekst",
  name: "richText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Only allow these decorators
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                description: "Ex: https://nrk.no",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "href",
                type: "string",
                title: "URL",
                description: "Ex: /aktuelt/kongen-aapner-festivalen",
              },
            ],
          },
        ],
      },
    },
  ],
};
