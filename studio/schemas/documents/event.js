import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const event = {
  name: "event",
  title: "Arrangementer",
  type: "document",
  fields: [
    title(),
    slug({ prefix: "program" }),
    intro(),
    image(),
    {
      name: "startDateTime",
      title: "Arrangementet starter",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "endDateTime",
      title: "Arrangementet slutter (valgfritt)",
      type: "datetime",
    },
    {
      title: "Sted",
      name: "location",
      type: "reference",
      validation: (Rule) => Rule.required(),
      description: "Hvor arrangementet foregår. Feks: Barneteltet",
      to: [{ type: "eventLocation" }],
    },
    {
      title: "Type arrangement (valgfritt)",
      name: "eventType",
      type: "reference",
      description: "Feks: Kokkekurs eller Foredrag",
      to: [{ type: "eventType" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
