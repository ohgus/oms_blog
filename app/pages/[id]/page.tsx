import { notFound } from "next/navigation";

import { allPosts } from "@/.contentlayer/generated";
import { DEFAULT_NUMBER_OF_POSTS } from "@/constants";
import PostCard from "@/components/post-card";
import Pagination from "@/components/pagination";

export const dynamic = "error";

export async function generateMetadata({
    params: {id},
}: {
    params: { id: string }
}) {
    return {
        title: `Page ${id}`,
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    const pageNo = parseInt(params.id);
    
    const sortedPosts = allPosts.sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    // Skip the featured post (first post) for pagination
    const remainingPosts = sortedPosts.slice(1);
    const postsPerPage = 10;
    const totalPages = Math.ceil(remainingPosts.length / postsPerPage);

    if (isNaN(pageNo) || pageNo > totalPages || pageNo < 1) {
        return notFound();
    }

    const startIndex = (pageNo - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPagePosts = remainingPosts.slice(startIndex, endIndex);

    return (
        <div className="space-y-8">
            {/* Page Title */}
            <div className="space-y-1 pt-1 pb-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-[#252B52] dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    ALL POSTS - Page {pageNo}
                </h1>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPagePosts.map((post) => (
                    <PostCard post={post} key={post._id} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination currentPage={pageNo} totalPages={totalPages} />
        </div>
    )
}