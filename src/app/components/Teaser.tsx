import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }: any) {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
}
