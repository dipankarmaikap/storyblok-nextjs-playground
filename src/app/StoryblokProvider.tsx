/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode, lazy } from "react";
import { accessToken } from "~/variables";
// import Page from "./components/Page";
// import Teaser from "./components/Teaser";
// import Feature from "./components/Feature";
// import Grid from "./components/Grid";
// import dynamic from "next/dynamic";

// const dynamicComponents = {
//   page: dynamic(() => import("./components/Page")),
//   teaser: dynamic(() => import("./components/Teaser")),
//   feature: dynamic(() => import("./components/Feature")),
//   grid: dynamic(() => import("./components/Grid")),
// };
const lazyComponents = {
  page: lazy(() => import("./components/Page")),
  teaser: lazy(() => import("./components/Teaser")),
  feature: lazy(() => import("./components/Feature")),
  grid: lazy(() => import("./components/Grid")),
};
// const components = {
//   page: Page,
//   teaser: Teaser,
//   feature: Feature,
//   grid: Grid,
// };

storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: lazyComponents,
});

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
