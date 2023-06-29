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
      startTime: "startDateTime",
      imageAsset: "image",
    },
    prepare({ title = "", startTime = "", imageAsset = {} }) {
      const dateOptions = { weekday: "long", month: "long", day: "numeric" };
      const timeOptions = { hour: "2-digit", minute: "2-digit" };
      const start = new Date(startTime);
      const localeStart = start.toLocaleDateString("no", dateOptions);
      const localeStartUppercase =
        localeStart[0].toUpperCase() + localeStart.slice(1);
      const localeTime = start.toLocaleTimeString("no", timeOptions);

      return {
        title,
        subtitle: `${localeStartUppercase}, kl ${localeTime}`,
        media: imageAsset,
      };
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
