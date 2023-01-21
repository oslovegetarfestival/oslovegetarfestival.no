import { image } from "./image";
import { listWithImageAndText } from "./listWithImageAndText";
import { quote } from "./quote";
import { richTextObject } from "./richTextObject";
import { video } from "./video";

export const contentBlocks = {
  name: "contentBlocks",
  type: "array",
  title: "Innholdsblokker",
  of: [richTextObject, image(), video, quote, listWithImageAndText],
};
