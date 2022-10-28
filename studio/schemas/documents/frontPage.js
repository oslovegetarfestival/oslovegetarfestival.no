import { intro } from "../parts/intro";
import { title } from "../parts/title";

export const frontPage = {
  name: "frontPage",
  title: "Forside",
  type: "document",
  fields: [title(), intro()],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
