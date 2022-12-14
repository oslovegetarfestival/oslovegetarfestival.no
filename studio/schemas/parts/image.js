import { bool } from "prop-types";
import React from "react";

export const image = ({
  title = "Bilde",
  required = false,
  includeCaption = false,
} = {}) => {
  return {
    name: "image",
    title: title,
    caption: bool,
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
      ...(includeCaption
        ? [
            {
              name: "caption",
              title: "Bildetekst",
              type: "string",
              options: {
                isHighlighted: true,
              },
            },
          ]
        : []),
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
};
