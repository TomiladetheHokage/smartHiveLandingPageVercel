// import { cn } from "@/lib/utils";
//
// type TitleHeadingProps = {
//   title: string;
//   description: string;
//   align?: "center" | "end" | "start";
// };
//
// const TitleHeading = ({ title, description, align }: TitleHeadingProps) => {
//   return (
      // <div className="w-full ">
      //   <div
      //     className={cn(
      //       "flex flex-col gap-2",
      //       align ? `text-${align} items-${align}` : "text-center items-center"
      //     )}
      //   >
      //     <h1
      //       className="text-4xl font-bold "
      //       style={{ color: "rgba(15, 45, 34, 1)" }}
      //     >
      //       {title}
      //     </h1>
      //     <p className="text-gray-500 md:max-w-[70%] text-xs md:text-base">
      //       {description}
      //     </p>
      //   </div>
      // </div>
//   );
// };
//
// export default TitleHeading;

type TitleHeadingProps = {
    title: string;
    description: string;
    align?: "center" | "end" | "start";
};

const TitleHeading = ({ title, description, align = "center" }: TitleHeadingProps) => {
    return (
        <div className="w-full  pt-6">
            <div className={`flex flex-col gap-0 text-${align} items-${align} transform -translate-y-2`}>
                <h1 className="text-[22px] md:text-5xl font-bold  font-poltawski">{title}</h1>
                <p className="text-[14px] w-[330px] md:w-[603px] md:leading-[24px] md:mt-2 md:text-[16px]">{description}</p>
                {/*<p className="font-light text-[14px] md:text-[18px] md:w-[650px]  !md:font-[300] ">{description}</p>*/}
            </div>
        </div>
    );
};

export default TitleHeading;

