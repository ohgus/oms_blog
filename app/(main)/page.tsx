import { allPosts } from '@/.contentlayer/generated';
import PostCard from '@/components/post-card';
import Pagination from '@/components/pagination';

export default async function Home() {
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);
  
  // Pagination logic
  const postsPerPage = 10;
  const currentPagePosts = remainingPosts.slice(0, postsPerPage);
  const totalPages = Math.ceil(remainingPosts.length / postsPerPage);

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="space-y-1 pt-1 pb-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-[#252B52] dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          ALL POSTS
        </h1>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-8">
          <PostCard post={featuredPost} size="featured" key={featuredPost._id} />
        </div>
      )}

      {/* Remaining Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentPagePosts.map((post) => (
          <PostCard post={post} size="grid" key={post._id} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={1} totalPages={totalPages} />
    </div>
  );
}
