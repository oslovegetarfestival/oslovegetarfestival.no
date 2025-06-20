import { image } from "./image";
import { listWithImageAndText } from "./listWithImageAndText";
import { quote } from "./quote";
import { richTextObject } from "./richTextObject";
import { video } from "./video";
import { sectionWithColor } from "./sectionWithColor";
import { accordion } from "./accordion";
import { smallSectionWithColor } from "./smallSectionWithColor";
import { button } from "./button";
import { slideshow } from "./slideshow";
import { ticketEmbed } from "./ticketEmbed";

export const contentBlocks = {
  name: "contentBlocks",
  type: "array",
  title: "Innholdsblokker",
  of: [
    richTextObject,
    image({ includeCaption: true }),
    video,
    quote,
    listWithImageAndText,
    sectionWithColor,
    smallSectionWithColor,
    accordion,
    button,
    slideshow,
    ticketEmbed,
  ],
};
