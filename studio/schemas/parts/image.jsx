import { bool } from "prop-types";
import React from "react";

export const image = ({
  title = "Bilde",
  name = "image",
  required = false,
  includeCaption = false,
  isFeaturedImage = false,
} = {}) => {
  return {
    name: name,
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
        description: "Beskrivelse av bilde. Brukes for blinde og svaksynte.",
        type: "string",
      },
      ...(includeCaption
        ? [
            {
              name: "caption",
              title: "Bildetekst",
              type: "string",
            },
          ]
        : []),
      ...(!isFeaturedImage
        ? [
            {
              name: "size",
              type: "string",
              title: "Størrelse",
              description:
                "Står feltet tomt vises det som 'Standard (utfallende)'. Du kan også beskjære bildet for å få riktig utsnitt og deretter velge bredden du ønsker.",
              options: {
                list: [
                  { title: "Gigastor", value: "large" },
                  { title: "Standard (utfallende)", value: "normal" },
                  { title: "Liten", value: "small" },
                  { title: "Bitteliten", value: "tiny" },
                ],
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
