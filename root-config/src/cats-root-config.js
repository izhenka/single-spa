import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cats/cat-shower",
  app: () => System.import("@cats/cat-shower"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@cats/favourites",
  app: () => System.import("@cats/favourites"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
