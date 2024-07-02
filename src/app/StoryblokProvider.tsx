/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react";
// import Page from "./components/Page";
// import Teaser from "./components/Teaser";
// import Feature from "./components/Feature";
import dynamic from "next/dynamic";
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: dynamic(() => import("./components/Page")),
    teaser: dynamic(() => import("./components/Teaser")),
    feature: dynamic(() => import("./components/Feature")),
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
