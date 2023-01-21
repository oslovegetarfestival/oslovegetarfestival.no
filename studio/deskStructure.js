import {
  FiSettings,
  FiHome,
  FiCalendar,
  FiCoffee,
  FiFileText,
  FiLink,
} from "react-icons/fi";

export default (S) =>
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
      S.documentTypeListItem("news").title("Aktuelt").icon(FiFileText),
      S.divider(),
      S.documentTypeListItem("exhibitor").title("Utstillere").icon(FiCoffee),
      S.documentTypeListItem("exhibitorType")
        .title("Utstiller: Typer")
        .icon(FiLink),
      S.divider(),
      S.documentTypeListItem("event").title("Arrangementer").icon(FiCalendar),
      S.documentTypeListItem("eventLocation")
        .title("Arrangement: Steder")
        .icon(FiLink),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
