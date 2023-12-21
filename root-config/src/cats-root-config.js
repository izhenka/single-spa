import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@cats/cat-shower",
  app: () => System.import("@cats/cat-shower"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
