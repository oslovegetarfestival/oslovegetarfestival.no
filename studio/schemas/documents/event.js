import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const event = {
  name: "event",
  title: "Arrangementer",
  type: "document",
  fields: [title(), slug({ prefix: "program" }), intro(), image()],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
