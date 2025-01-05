import React from 'react';

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen bg-zinc-800">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-700 text-xl font-semibold">
        Documents
      </div>
      <h1 className="leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[14vw]">
        Docs✒️
      </h1>
    </div>
  );
};

export default Background;