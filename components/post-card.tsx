import Image from "next/image";
import Link from "next/link";
import { Post } from "../.contentlayer/generated";
import { DEFAULT_IMAGE_URL } from "@/constants";
import { getBlurDataUrl, isLocalImageFileValid } from "@/libs/image-utils";

type Props = {
    post: Post;
    size?: 'featured' | 'grid' | 'single';
};

export default async function PostCard({ post, size = 'grid' }: Props) {
    const imageUrl = post?.image || DEFAULT_IMAGE_URL;

    if (!(await isLocalImageFileValid(imageUrl))) {
        return null;
    }

    const blurDataUrl = await getBlurDataUrl(imageUrl);

    // Size configurations - using Tailwind approximate values
    const sizeConfig = {
        featured: 'h-[480px]', // ~480px height for 900x480
        grid: 'h-[316px] md:h-[316px]', // ~316px height for 438x316 in grid, 316px for single column on mobile
        single: 'h-[316px]' // ~316px height for 600x316
    };

    return (
        <Link href={post.url_path} className="flex p-2">
            <div className="group flex w-full flex-col gap-y-2 text-[#252B52] dark:text-white">
                <div className={`relative ${sizeConfig[size]} w-full overflow-hidden`}>
                    <div className={`absolute left-0 rigth-0 top-0 z-10 flex ${sizeConfig[size]} w-full flex-col items-start justify-between rounded-lg bg-black p-2 opacity-0 transition delay-100 ease-in-out group-hover:opacity-70`}>
                        <span className="rounded-full border px-2 py-1 text-sm font-bold text-white">
                            {post.category}
                        </span>
                        {post?.description ? (
                            <p className="font-regular break-words text-sm text-white">
                                {post.description}
                            </p>
                        ) : null}
                    </div>
                    <Image
                     fill
                     src={post?.image || DEFAULT_IMAGE_URL}
                     alt={post.title}
                     className="rounded-lg object-cover"
                     loading="lazy"
                     quality={100}
                     placeholder="blur"
                     blurDataURL={blurDataUrl}
                     sizes="(max-width: 48rem) 100vw, (max-width: 75rem) 60vw, 50vw"
                     />
                </div>
                <div className="flex flex-col items-start gap-y-1 px-1">
                    <span>
                        {post.publishedAt.replaceAll("-", "/")}
                    </span>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                </div>
            </div>
        </Link>
    );
}