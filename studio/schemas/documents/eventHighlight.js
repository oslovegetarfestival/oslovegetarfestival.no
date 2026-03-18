export const eventHighlight = {
  name: "eventHighlight",
  title: "Arrangement: Fremhevet",
  type: "document",
  fields: [
    {
      name: "highlightedEvents",
      title: "Fremhev arrangementer på Program siden",
      type: "array",
      description:
        "Legg til arrangementer og sorter dem i ønsket rekkefølge ved å dra og slippe.",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
          options: {
            filter: ({ document }) => {
              const year = new Date().getFullYear();
              const selectedIds = (document.highlightedEvents || [])
                .map((item) => item._ref)
                .filter(Boolean);
              return {
                filter:
                  '!(_id in path("drafts.**")) && startDateTime >= $startOfYear && startDateTime < $endOfYear && !(_id in $selectedIds)',
                params: {
                  startOfYear: `${year}-01-01`,
                  endOfYear: `${year + 1}-01-01`,
                  selectedIds,
                },
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: "Arrangement: Fremhevet" };
    },
  },
};
