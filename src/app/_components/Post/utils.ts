import staticImage from "@/assets/images/profile.png";

export const handleImageSrc = (path: string) => {
    const allKeywords = path.split("/");
    const lastKeyword = allKeywords[allKeywords.length - 1];
    if (lastKeyword === "undefined") {
        return staticImage;
    }
    return path;
};
