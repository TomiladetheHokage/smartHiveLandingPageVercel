"use client";

import Image from "next/image";
import { blogHeading } from "../../../public/assets";
import { Sidebar } from "./components/sidebar";
import { BlogItem } from "./components/blogItem";
import { Button } from "@/components/ui/button";
import { blogData } from "@/data";





const BlogPage = () => {
    return (
        <div className="lg:px-20 md:px-10 p-5 md:py-10 mt-14">
            <div className="w-full h-[200px] md:h-[400px] mt-20 relative">
                <Image src={blogHeading} alt="blogHeading" className="w-full h-full" />
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                    <h1 className="text-white text-xl md:text-3xl text-center">Empowering Connections: The Smarthive SMS Revolution.</h1>
                </div>
            </div>
            <div className="flex mt-10 gap-5 flex-col-reverse md:flex-row">
                <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        blogData.map((article, index) =>
                            <BlogItem key={index} article={article} />
                        )
                    }
                </div>
                <Sidebar />
            </div>
            <div className="flex w-full justify-center mt-10">
                <Button>
                    Read More
                </Button>
            </div>
        </div>
    );
}

export default BlogPage;