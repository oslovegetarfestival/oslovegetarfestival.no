import { contentBlocks } from "../parts/contentBlocks";
import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { slug } from "../parts/slug";
import { title } from "../parts/title";
import { seo } from "../parts/seo";

export const event = {
  name: "event",
  title: "Arrangementer",
  type: "document",
  fields: [
    title(),
    slug({ prefix: "program" }),
    intro(),
    image({ title: "Hovedbilde", includeCaption: true, isFeaturedImage: true }),
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
    contentBlocks,
    seo,
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Start dato",
      name: "startDateAsc",
      by: [{ field: "startDateTime", direction: "asc" }],
    },
  ],
};
