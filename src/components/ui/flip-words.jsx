import { useEffect, useState } from "react";

export const FlipWords = ({ words = [], duration = 2200, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!words.length) return undefined;

    const intervalId = window.setInterval(() => {
      setVisible(false);

      window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 170);
    }, duration);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [words, duration]);

  if (!words.length) return null;

  return (
    <span
      className={`inline-block min-w-[6ch] align-baseline font-semibold text-text-primary transition-all duration-200 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
      } ${className}`}
    >
      {words[index]}
    </span>
  );
};

export default FlipWords;
