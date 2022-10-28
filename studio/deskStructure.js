import {
  FiSettings,
  FiHome,
  FiCalendar,
  FiCoffee,
  FiFileText,
} from "react-icons/fi";
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Innhold")
    .items([
      S.listItem()
        .title("Forside")
        .icon(FiHome)
        .child(S.document().schemaType("frontPage").documentId("frontPage")),
      S.divider(),
      S.documentTypeListItem("page").title("Sider"),
      S.divider(),
      S.documentTypeListItem("event").title("Arrangementer").icon(FiCalendar),
      S.documentTypeListItem("exhibitor").title("Utstillere").icon(FiCoffee),
      S.documentTypeListItem("news").title("Aktuelt").icon(FiFileText),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
