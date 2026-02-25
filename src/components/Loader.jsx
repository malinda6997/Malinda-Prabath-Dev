import React, { useState, useEffect } from "react";

const Loader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500);
          return 100;
        }
        return oldProgress + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 z-[10000] bg-transparent flex items-center justify-center">
      <div className="text-white font-mono tracking-[1em]">{progress}%</div>
    </div>
  );
};

export default Loader;
