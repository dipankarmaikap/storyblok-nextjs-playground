import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }: any) {
  return <h2 {...storyblokEditable(blok)}>{blok.name}</h2>;
}
