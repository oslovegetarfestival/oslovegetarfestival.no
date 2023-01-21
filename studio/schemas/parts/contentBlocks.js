import { image } from "./image";
import { richTextObject } from "./richTextObject";
import { video } from "./video";

export const contentBlocks = {
  name: "contentBlocks",
  type: "array",
  title: "Innholdsblokker",
  of: [richTextObject, image(), video],
};
