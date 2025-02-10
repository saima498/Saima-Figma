
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // ensure these env variables set hain
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

export function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}
