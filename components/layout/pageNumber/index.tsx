import Link from "next/link";

export default function PageNumber({
    pageNo,
    hasNextPage,
    next,
    prev,
}: {
    pageNo: number
    next: string
    prev?: string
    hasNextPage?: boolean
}) {
    return (
        <div className="flex">
            <div className="flex w-1/2 justify-start text-base font-medium leading-6 py-3">
                {pageNo !== 1 && prev && (
                    <Link
                        href={prev}
                        className="text-green-500 hover:text-green-600 dark:text-yellow-400 dark:hover:text-yellow-200"
                        aria-label="all posts"
                    >
                        Page {pageNo - 1} &larr;
                    </Link>
                )}
            </div>

            <div className="flex w-1/2 justify-end text-base font-medium leading-6 py-3">
                {hasNextPage && (
                    <Link
                        href={next}
                        className="text-green-500 hover:text-green-600 dark:text-yellow-400 dark:hover:text-yellow-200"
                        aria-label="all posts"
                    >
                        Page {pageNo + 1} &rarr;
                    </Link>
                )}
            </div>
        </div>
    )
}