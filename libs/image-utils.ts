import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import path from "node:path";

export const getBlurDataUrl = async (src: string) => {
    const imagePath = path.join(process.cwd(), "public", src);
    const file = await fs.readFile(imagePath);
    const { base64 } = await getPlaiceholder(file, {size: 10});

    return base64;
};

export const isLocalImageFileValid = async (src: string) => {
    try {
        const imagePath = path.join(process.cwd(), "public", src);
        const file = await fs.readFile(imagePath);

        return !file?.length ? false : true;
    } catch(err) {
        console.log(err, "error!");
        return false;
    }
};