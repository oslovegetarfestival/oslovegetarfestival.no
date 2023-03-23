import { bool } from "prop-types";
import React from "react";

export const image = ({
  title = "Bilde",
  name = "image",
  required = false,
  includeCaption = false,
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
      {
        name: "size",
        type: "string",
        title: "Størrelse",
        description: "Standard (eller ikke valgt) er medium størrelse",
        options: {
          list: [
            { title: "Gigastor", value: "large" },
            { title: "Vanlig (utfallende)", value: "normal" },
            { title: "Liten", value: "small" },
            { title: "Bitteliten", value: "tiny" },
          ],
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
};
