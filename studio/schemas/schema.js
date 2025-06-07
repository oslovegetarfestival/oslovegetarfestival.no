// Import document schemas (pages)
import { page } from "./documents/page";
import { event } from "./documents/event";
import { eventLocation } from "./documents/eventLocation";
import { exhibitor } from "./documents/exhibitor";
import { exhibitorType } from "./documents/exhibitorType";
import { news } from "./documents/news";
import { settings } from "./documents/settings";
import { frontPage } from "./documents/frontPage";
import { greenEvents } from "./documents/greenEvents";
import { greenEventsFoodProvider } from "./documents/greenEventsFoodProvider";
import { greenEventsFoodProviderType } from "./documents/greenEventsFoodProviderType";
import { ticketEmbed } from "./parts/ticketEmbed";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  page,
  event,
  eventLocation,
  exhibitor,
  exhibitorType,
  news,
  settings,
  frontPage,
  greenEvents,
  greenEventsFoodProvider,
  greenEventsFoodProviderType,
  ticketEmbed,
];
