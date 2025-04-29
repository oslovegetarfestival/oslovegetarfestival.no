import { contentBlocks } from "../parts/contentBlocks";
import { image } from "../parts/image";
import { intro } from "../parts/intro";
import { richText } from "../parts/richText";
import { seo } from "../parts/seo";
import { slug } from "../parts/slug";
import { title } from "../parts/title";

export const exhibitor = {
  name: "exhibitor",
  title: "Utstillere",
  type: "document",
  initialValue: {
    sponsor: false,
  },
  fields: [
    title(),
    slug({ prefix: "utstillere" }),
    intro(),
    image({ title: "Hovedbilde", includeCaption: true, isFeaturedImage: true }),
    {
      title: "Type utstiller",
      name: "type",
      type: "reference",
      validation: (Rule) => Rule.required(),
      description: "Hva slags type utstiller. Feks: Restaurantbod",
      to: [{ type: "exhibitorType" }],
    },
    {
      title: "Dette er en sponsor",
      name: "sponsor",
      type: "boolean",
    },
    contentBlocks,
    {
      name: "area",
      title: "Sone på kart",
      description: "Brukes på siden /kart",
      type: "string",
      options: {
        list: [
          { title: "Power up - mat og drikke", value: "power-up" },
          { title: "Muscle power", value: "muscle-power" },
          { title: "Green light district", value: "green-light-district" },
          { title: "Animal lovers", value: "animal-lovers" },
        ],
      },
    },
    {
      name: "menu",
      title: "Meny",
      description: "Brukes for serveringsboder",
      type: "object",
      fields: [richText],
    },
    seo,
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
