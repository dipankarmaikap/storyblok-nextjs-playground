import { storyblokEditable } from "@storyblok/react/rsc";

export default function Grid({ blok }: any) {
  return <h2 {...storyblokEditable(blok)}>this is grid box</h2>;
}
