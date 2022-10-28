import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const exhibitor = {
  name: "exhibitor",
  title: "Utstillere",
  type: "document",
  fields: [title(), slug({ prefix: "utstillere" }), intro(), image()],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
