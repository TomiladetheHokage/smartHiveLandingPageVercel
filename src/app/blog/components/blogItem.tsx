"use client";


import Image from "next/image";

type Props = {
    article: {
        title: string,
        description: string,
        image: any,
        author: string,
        date: string,
        comments: number,
        views: number,
    };
}
export const BlogItem = ({ article }: Props) => {
    return (
        <div className="w-full cursor-pointer">
            <Image src={article.image} alt="blogImage" className="w-full h-[220px] rounded-md" />
            <div className="p-3">
                <h1 className="font-semibold md:text-sm lg:text-base">
                    {article.title}
                </h1>
                <h3 className="mt-3 text-sm md:text-xs lg:text-sm">
                    {article.description}
                </h3>
                <div className="flex justify-between text-sm mt-3 md:text-xs lg:text-sm">
                    <p>
                        By <span className="font-semibold">{article.author}</span>
                    </p>
                    <p>
                        {article.comments} Comments
                    </p>
                </div>
            </div>

        </div>
    );
}