import { allPosts } from "@/.contentlayer/generated";
import { CATEGORY_ALL } from "@/constants/category";

export function getPostByCategory(category: string) {
    const posts = allPosts.filter((post) => post.category === category);

    return posts;
}