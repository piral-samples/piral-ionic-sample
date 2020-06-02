import "piral/polyfills";
import "./styles";
import { setupConfig } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { renderInstance } from "piral";
import { layout, errors } from "./layout";
import { setupSamplePilet } from "./pilet";
import { Home } from './Home';
import { About } from "./About";

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";

setupConfig({
  rippleEffect: true,
  mode: "md",
});

const { root } = renderInstance({
  layout,
  errors,
  state: {
    components: {
      Router: IonReactRouter as any,
    },
    routes: {
      "/home": Home,
      "/about": About,
    },
  },
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

setupSamplePilet(root);
