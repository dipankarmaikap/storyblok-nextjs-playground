import {
  StoryblokStory,
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
} from "@storyblok/react/rsc";

type CatchAllRoute = {
  params: {
    slug?: string[];
  };
};
export default async function CatchAllRoute({
  params: { slug },
}: CatchAllRoute) {
  const uri = slug?.join("/");
  const { data } = await fetchData(uri);

  return (
    <>
      <h1>Story: {data.story.id}</h1>
      <StoryblokStory story={data.story} />
    </>
  );
}
async function fetchData(uri: string | undefined) {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${uri || "home"}`, sbParams, {
    cache: "no-store",
  });
}
