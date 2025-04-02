"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  children?: ReactNode;
  codeString?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  language?: string;
};
export const CodeContainer = ({
  children,
  codeString,
  className,
  language = "json",
}: Props) => {
  return (
    <div
      className={`bg-black flex p-2 rounded text-sm max-w-full md:min-w-[250px] md:max-w-fit text-wrap ${className}`}
    >
      {codeString ? (
        <SyntaxHighlighter
          language={language}
          style={coy}
          customStyle={{
            borderRadius: "0.2rem",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            maxWidth: "100%",
          }}
        >
          {codeString || ""}
        </SyntaxHighlighter>
      ) : (
        <div className="text-white max-w-max text-wrap">{children}</div>
      )}
    </div>
  );
};
