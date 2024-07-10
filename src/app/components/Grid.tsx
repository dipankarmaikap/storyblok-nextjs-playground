import { storyblokEditable } from "@storyblok/react/rsc";
import Uppy from "@uppy/core";

export default function Grid({ blok }: any) {
  const uppy = new Uppy();

  return <h2 {...storyblokEditable(blok)}>this is grid box</h2>;
}
