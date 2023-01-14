import { image } from "./image";
import { richTextObject } from "./richTextObject";

export const contentBlocks = {
  name: "contentBlocks",
  type: "array",
  title: "Innholdsblokker",
  of: [image(), richTextObject],
};
