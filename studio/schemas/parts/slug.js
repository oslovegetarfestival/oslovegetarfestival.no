import React from "react";
import slugify from "slugify";

// Idea from https://www.simeongriggs.dev/nextjs-sanity-slug-patterns

function formatSlug(input, slugStart) {
  const slug = slugify(input, {
    lower: true,
    strict: true,
    locale: "nb_NO",
  });

  return slugStart + slug;
}

export const slug = ({ prefix = "", source = "title" } = {}) => {
  const slugStart = prefix ? `/${prefix}/` : "/";

  return {
    title: "Slug",
    name: "slug",
    type: "slug",
    description: (
      <span>
        Dette blir nettadressen til siden, feks: <em>example.com/slug</em>
        <br />
        <strong>OBS! Slug bør ikke endres etter siden er publisert.</strong>
      </span>
    ),
    options: {
      source: source,
      slugify: (value) => formatSlug(value, slugStart),
    },
    validation: (Rule) =>
      Rule.required().custom(({ current }) => {
        if (typeof current === "undefined") {
          return true;
        }

        if (current) {
          if (!current.startsWith(slugStart)) {
            return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
          }

          if (current.slice(slugStart.length).split("").includes("/")) {
            return `Slug cannot have another "/" after "${slugStart}"`;
          }

          if (current === slugStart) {
            return "Slug cannot be empty";
          }

          if (current.endsWith("/")) {
            return 'Slug cannot end with "/"';
          }
        }

        return true;
      }),
  };
};
