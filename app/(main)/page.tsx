import { allPosts, Post } from '@/.contentlayer/generated';
import TagFilter, { TagOption } from '@/components/tag-filter';
import PostCard from '@/components/post-card';
import Pagination from '@/components/pagination';

type HomeProps = {
  searchParams?: {
    tag?: string;
  };
};

type PostWithNormalizedTags = Post & {
  normalizedTags: string[];
};

const normalizeTags = (tags: Post['tags']): string[] => {
  if (!tags) {
    return [];
  }

  return tags
    .flatMap((tag) => tag.split(','))
    .map((tag) => tag.trim())
    .filter(Boolean);
};

const buildTagOptions = (posts: PostWithNormalizedTags[]): TagOption[] => {
  const tagMap = new Map<string, { label: string; count: number }>();

  posts.forEach((post) => {
    post.normalizedTags.forEach((tag) => {
      const key = tag.toLowerCase();
      const existing = tagMap.get(key);

      if (existing) {
        existing.count += 1;
      } else {
        tagMap.set(key, { label: tag, count: 1 });
      }
    });
  });

  const tagOptions = Array.from(tagMap.values()).sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })
  );

  return [{ label: 'All', count: posts.length }, ...tagOptions];
};

const getSelectedTag = (tagOptions: TagOption[], searchParamTag?: string): string => {
  if (!searchParamTag) {
    return 'All';
  }

  const normalized = searchParamTag.toLowerCase();

  const matchingTag = tagOptions.find(
    (tag) => tag.label.toLowerCase() === normalized
  );

  return matchingTag ? matchingTag.label : 'All';
};

export default async function Home({ searchParams }: HomeProps) {
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const postsWithTags: PostWithNormalizedTags[] = sortedPosts.map((post) => ({
    ...post,
    normalizedTags: normalizeTags(post.tags),
  }));

  const tagOptions = buildTagOptions(postsWithTags);
  const selectedTag = getSelectedTag(tagOptions, searchParams?.tag);
  const normalizedSelectedTag = selectedTag.toLowerCase();

  const filteredPosts =
    normalizedSelectedTag === 'all'
      ? postsWithTags
      : postsWithTags.filter((post) =>
          post.normalizedTags.some(
            (tag) => tag.toLowerCase() === normalizedSelectedTag
          )
        );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const postsPerPage = 10;
  const currentPagePosts = remainingPosts.slice(0, postsPerPage);
  const totalPages = Math.ceil(remainingPosts.length / postsPerPage);

  return (
    <div className="space-y-8">
      <div className="space-y-1 pt-1 pb-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-[#252B52] dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          ALL POSTS
        </h1>
      </div>

      <TagFilter tags={tagOptions} selectedTag={selectedTag} />

      {featuredPost ? (
        <div className="mb-8">
          <PostCard post={featuredPost} size="featured" key={featuredPost._id} />
        </div>
      ) : (
        <p className="text-sm text-[#252B52]/80 dark:text-gray-300">
          아직 해당 태그로 작성된 글이 없습니다.
        </p>
      )}

      {currentPagePosts.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {currentPagePosts.map((post) => (
            <PostCard post={post} size="grid" key={post._id} />
          ))}
        </div>
      )}

      {totalPages > 0 && (
        <Pagination currentPage={1} totalPages={totalPages} />
      )}
    </div>
  );
}
