import React from "react";

const VerticalLine = () => {
  return (
    <div className="fixed left-[12%] top-0 w-[1px] h-full bg-white/5 z-50 hidden md:block">
      {/* Start Section */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center">
        {/* Start Label - දැන් මේක කරකවලා නැහැ, සාමාන්‍ය විදිහට තියෙන්නේ */}
        <div className="text-brand text-[10px] font-black tracking-[0.4em] uppercase mb-4">
          Start /&gt;
        </div>
        {/* Blue Dot */}
        <div className="w-[8px] h-[8px] rounded-full bg-brand shadow-[0_0_15px_#6366f1]"></div>
      </div>

      {/* Scroll Label */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
        <div className="rotate-90 text-white/10 text-[9px] tracking-[0.5em] font-black uppercase">
          SCROLL
        </div>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand to-transparent"></div>
      </div>
    </div>
  );
};

export default VerticalLine;
