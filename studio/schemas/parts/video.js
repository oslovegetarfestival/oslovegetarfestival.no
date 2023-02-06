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
        "Lim inn id'en til en Youtube video. Dette vil være feks: 'HMbRoB3TaqU' dersom videoen er https://www.youtube.com/watch?v=HMbRoB3TaqU",
    },
  ],
  preview: {
    select: {
      title: "videoId",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: `YouTube: ${title}`,
        subtitle: "Video",
      };
    },
  },
};
