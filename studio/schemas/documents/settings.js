import { intro } from "../parts/intro";
import { title } from "../parts/title";

export const settings = {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [title(), intro()],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
