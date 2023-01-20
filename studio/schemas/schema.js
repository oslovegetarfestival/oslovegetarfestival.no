// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import document schemas (pages)
import { page } from "./documents/page";
import { event } from "./documents/event";
import { eventLocation } from "./documents/eventLocation";
import { exhibitor } from "./documents/exhibitor";
import { exhibitorType } from "./documents/exhibitorType";
import { news } from "./documents/news";
import { settings } from "./documents/settings";
import { frontPage } from "./documents/frontPage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    event,
    eventLocation,
    exhibitor,
    exhibitorType,
    news,
    settings,
    frontPage,
  ]),
});
