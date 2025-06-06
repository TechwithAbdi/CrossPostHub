"use client";

import { useCodeEditorStore } from "@/store/MainStore/useCodeEditStore";
import { BorderStyle } from "@/Types/Types";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
  backgroundColor?: string;
  code: string;
  border?: {
    type?: BorderStyle;
    color: string;
    width: number;
    radius: number;
  };
  theme?: string;
};

export const CodeBlock = React.memo(
  ({
    backgroundColor = "transparent",
    language,
    code,
    highlightLines = [],
    border = {
      type: "solid",
      color: "#333333",
      width: 1,
      radius: 20,
    },
    theme,
  }: CodeBlockProps) => {
    const fontSize = code.length > 1000 ? "0.6rem" : "0.875rem";

    const store = useCodeEditorStore()

    return (
      <div
        className="relative max-w-7xl lg:w-[780px] rounded-lg overflow-hidden bg-slate-900 backdrop-blur-xl p-2 font-mono text-sm"
        style={{
          backgroundColor,
          borderRadius: border.radius,
          borderWidth: border.width,
          borderStyle: border.type,
          borderColor: border.color,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${store.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: `blur(${store.background.blur}px) brightness(${store.background.brightness})`,
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.7)",
            zIndex: -1,
          }}
        />

        <SyntaxHighlighter
          language={language}
          style={theme ? (theme as any) : atomDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize,
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: highlightLines.includes(lineNumber)
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              display: "block",
              width: "100%",
            },
          })}
          PreTag="div"
        >
          {String(code)}
        </SyntaxHighlighter>
      </div>
    );
  }
);
CodeBlock.displayName = "CodeBlock";
