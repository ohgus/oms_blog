import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { getSlugWithoutCategoryPath } from "./libs/mdx";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  url_path: {
    type: "string",
    resolve: (doc) => `/post/${getSlugWithoutCategoryPath(doc)}`,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    category: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      description: "The image with local path. Use for SEO, thumbnail, etc.",
    },
    description: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    series: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
});
