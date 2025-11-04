import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import { getSlugWithoutCategoryPath } from './libs/mdx';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => getSlugWithoutCategoryPath(doc),
  },
  url_path: {
    type: 'string',
    resolve: (doc) => `/post/${getSlugWithoutCategoryPath(doc)}`,
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image with local path. Use for SEO, thumbnail, etc.',
    },
    description: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    series: {
      type: 'string',
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copyable
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className = ['line--highlighted'];
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
    ],
  },
});
