import React from "react";

function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen ">
      <div className="absolute top-[5%] w-full font-semibold flex justify-center py-10 text-zinc-500 text-2xl">
        Documents.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[90%] text-[13vw] font-semibold leading-none tracking-tigh text-zinc-900">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
