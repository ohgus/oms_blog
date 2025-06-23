import { allPosts } from '@/.contentlayer/generated';
import PostCard from '@/components/post-card';

export default async function Home() {
  const mainPosts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  return (
    <div>
      {mainPosts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
}
