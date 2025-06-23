import { notFound } from "next/navigation";

import { allPosts } from "@/.contentlayer/generated";
import { DEFAULT_NUMBER_OF_POSTS } from "@/constants";
import PageNumber from "@/components/layout/pageNumber";
import ListLayout from "@/components/layout/listLayout";

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

    if (
        isNaN(pageNo) ||
        pageNo > Math.ceil(allPosts.length / DEFAULT_NUMBER_OF_POSTS) ||
        pageNo < 1
    ) {
        return notFound();
    }

    const startIndex = (pageNo - 1) * DEFAULT_NUMBER_OF_POSTS;
    const endIndex = startIndex + DEFAULT_NUMBER_OF_POSTS;

    const posts = allPosts.slice(startIndex, endIndex);

    const hasNextPage = 
        Math.ceil(allPosts.length / DEFAULT_NUMBER_OF_POSTS) > pageNo;

    const title = `Page ${pageNo}`;

    return (
        <div className="px-5 sm:px-3">
            <ListLayout posts={posts}title={title} />
            <PageNumber
                pageNo={pageNo}
                next={`/pages/${pageNo + 1}`}
                prev={`/pages/${pageNo - 1}`}
                hasNextPage={hasNextPage}
            />
        </div>
    )
}