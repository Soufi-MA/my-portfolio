"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  lines,
  lineClassNames = [],
  filter = true,
  duration = 0.5,
}: {
  lines: string[];
  lineClassNames?: string[];
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderLines = () => {
    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => {
          const wordsArray = line.split(" ");
          const lineClass =
            lineClassNames[lineIdx] || "dark:text-white text-black";

          return (
            <motion.div key={lineIdx} className={cn(lineClass, "mb-2")}>
              {wordsArray.map((word, wordIdx) => (
                <motion.span
                  key={word + wordIdx}
                  className="opacity-0"
                  style={{
                    filter: filter ? "blur(10px)" : "none",
                  }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="font-bold">
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide">
          {renderLines()}
        </div>
      </div>
    </div>
  );
};
