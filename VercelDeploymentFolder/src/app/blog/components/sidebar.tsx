"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { blogData } from "@/data";


type Props = {

}

interface BlogItem {
    title: string,
    description: string,
    image: any,
    views: number,
    date: string,
}
export const Sidebar = ({ }: Props) => {
    const [activeTab, setActiveTab] = useState("recent");

    const filteredData = blogData
        .sort((a: BlogItem, b: BlogItem) => {
            if (activeTab === "popular") {
                // Sort by views in descending order
                return b.views - a.views;
            } else if (activeTab === "recent") {
                // Sort by date in descending order
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
            return 0; // No sorting if no activeTab matches
        });
    return (
        <div className="md:w-[30%] w-full h-full">
            <div
                className="w-full flex h-[40px] items-center gap-2 px-3 rounded-full"
                style={{
                    backgroundColor: "rgba(215, 207, 207, 1)"
                }}
            >
                <IoSearchOutline />
                <input type="search" className="flex-1 bg-transparent h-full outline-none" />
            </div>
            <div className="grid grid-cols-2 h-[50px] mt-5">
                <div
                    className={cn("w-full h-full flex items-center justify-center cursor-pointer", activeTab === "popular" ? "bg-[#D7CFCF]" : "bg-transparent")}
                    onClick={() => setActiveTab("popular")}
                >
                    Popular Post
                </div>
                <div
                    className={cn("w-full h-full flex items-center justify-center cursor-pointer", activeTab === "recent" ? "bg-[#D7CFCF]" : "bg-transparent")}
                    onClick={() => setActiveTab("recent")}
                >
                    Recent Post
                </div>
            </div>
            <div>
                {
                    filteredData.map((article, index) =>
                        <div key={index} className="flex gap-3 mt-5 w-full">
                            <div className="min-w-[50%] h-[100px]">
                                <Image src={article.image} alt="blogImage" className="w-full h-full object-cover rounded-md" />
                            </div>
                            <div className="min-h-full flex flex-col justify-between">
                                <h1 className="font-semibold text-sm">
                                    {article.title}
                                </h1>
                                <h1>
                                    {moment(article.date).format("MMM DD, YYYY")}
                                </h1>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}