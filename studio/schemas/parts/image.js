import React from "react";

export default function image({
  title = "Bilde",
  required = false,
  description = null,
} = {}) {
  return {
    name: "image",
    title: title,
    description: description,
    type: "image",
    validation: required ? (Rule) => Rule.required() : null,
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: "altText",
        title: "Alternativ text",
        description: "Beskrivelse av bilde. Brukes for blinde og svaksynte",
        type: "string",
        options: {
          isHighlighted: true,
        },
      },
      {
        name: "caption",
        title: "Bildetekst",
        type: "string",
        options: {
          isHighlighted: true,
        },
      },
    ],
    preview: {
      select: {
        fileName: "asset.originalFilename",
        imageUrl: "asset.url",
      },
      prepare(selection) {
        const { fileName, imageUrl } = selection;
        return {
          title: fileName,
          subtitle: "Bilde",
          media: <img src={`${imageUrl}?w=80&h=80&fit=crop`} />,
        };
      },
    },
  };
}
