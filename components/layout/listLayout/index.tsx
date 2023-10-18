import Link from "next/link";

import { Post } from "@/.contentlayer/generated";

export default function ListLayout({
    posts,
    title,
}: {
    posts: Post[]
    title: string
}) {
    return (
        <div className="divide-y">
            <div className="space-y-1 pt-1 pb-5 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    {title}
                </h1>
            </div>
            <ul>
                {posts.map((post, index) => {
                    return (
                        <li key={`${post.slug}_${index}`} className="py-4">
                            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                <dl>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <p>{post.publishedAt}</p>
                                    </dd>
                                </dl>
                                <div className="space-y-3 xl:col-span-3">
                                    <div>
                                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                            <Link
                                                href={post.url_path}
                                                className="text-gray-900 dark:text-gray-100"
                                            >
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div className="flex flex-wrap">

                                        </div>
                                    </div>
                                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                        {post.description}
                                    </div>
                                </div>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}