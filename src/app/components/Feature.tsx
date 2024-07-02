import { storyblokEditable } from "@storyblok/react/rsc";
import Uppy from "@uppy/core";

export default function Feature({ blok }: any) {
  const uppy = new Uppy();
  return <h2 {...storyblokEditable(blok)}>{blok.name}</h2>;
}
