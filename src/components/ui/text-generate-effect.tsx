// components/TextGenerateEffect.js

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

export const TextGenerateEffect = ({
  lines,
}: {
  lines: {
    text: string;
    className: string;
  }[];
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const controls = useAnimation();
  const lineDelay = 1.0; // Adjust the delay between lines

  useEffect(() => {
    const animateLines = async () => {
      for (let i = 0; i < lines.length; i++) {
        setCurrentLine(i); // Update state to show the current line
        await controls.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
        // Wait before starting the next line
        await new Promise((resolve) => setTimeout(resolve, lineDelay * 1000)); // Delay in milliseconds
      }
    };

    animateLines();
  }, [controls, lines.length]);

  return (
    <div className="flex flex-col">
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          initial={{ opacity: 0 }}
          animate={currentLine >= lineIndex ? { opacity: 1 } : { opacity: 0 }}
          className={line.className}
        >
          {line.text.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: wordIndex * 0.1, duration: 0.5 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
