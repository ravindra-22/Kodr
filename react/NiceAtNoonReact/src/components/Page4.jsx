import React from "react";

const Page4 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 mx-auto w-11/12">
      <h5 className="pt-14 pb-10">Cases</h5>
      <div className="relative">
        <h1 className="text-9xl font-bold">HEAD TURNING</h1>
        <h1 className="text-center text-9xl font-bold -m-3">PROJECTS</h1>
        <div className="absolute top-[84%] left-[58%] translate-x-1/2 translate-y-1/2 rotate-[-10deg] p-4 px-6 text-center rounded-3xl bg-amber-400">
          Gotta see'm all
        </div>
      </div>
      <button className="text-left h-14 w-[12%] px-2 mt-12 place-self-end border-2 border-black rounded-2xl bg-white">
        Alle Projecten
      </button>
    </div>
  );
};

export default Page4;
