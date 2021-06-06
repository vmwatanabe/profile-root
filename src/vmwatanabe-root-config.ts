import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vmwatanabe/content",
  app: () => System.import("@vmwatanabe/content"),
  activeWhen: () => true,
  customProps: (appName, location) => {
    return {
      domElement: document.getElementById("content-container"),
      pathname: location.pathname,
    };
  },
});

registerApplication({
  name: "@vmwatanabe/sidebar",
  app: () => System.import("@vmwatanabe/sidebar"),
  activeWhen: () => true,
  customProps: {
    domElement: document.getElementById("sidebar-container"),
  },
});

start({
  urlRerouteOnly: true,
});
