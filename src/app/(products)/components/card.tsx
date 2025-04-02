import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData | any;
  title: string;
  description: string;
  span?: number;
};
export const Card = ({ description, image, title, span }: Props) => {
  return (
    <div className={cn("flex items-center justify-center md:flex-row flex-col w-full gap-5"
    )}>
      <div className={cn(
        "w-full flex flex-col items-center"
      )}>
        <h1 className="text-xl font-medium">{title}</h1>
        <p
          className={cn(
            "text-[14px] text-gray-800 mt-2",
            span === 2 ? "md:max-w-[50%] w-full" : "w-full"
          )}
        >
          {description}
        </p>
      </div>
      <div className="flex justify-start">
        <Image
          src={image}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};
