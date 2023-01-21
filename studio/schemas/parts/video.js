export const video = {
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      name: "videoId",
      title: "Video ID",
      type: "string",
      description:
        "Lim inn id'en til en Vimeo video. Dette vil være feks: '552840839' dersom videoen er https://vimeo.com/552840839",
    },
  ],
  preview: {
    select: {
      title: "videoId",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `Vimeo: ${title}`,
        subtitle: "Video",
      };
    },
  },
};
