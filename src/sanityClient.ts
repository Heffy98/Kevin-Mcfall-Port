import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "f5v5hyyc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}