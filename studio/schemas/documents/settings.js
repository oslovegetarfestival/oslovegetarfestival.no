import { intro } from "../parts/intro";
import { title } from "../parts/title";

export const settings = {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [title(), intro()],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
