import React from "react";

const Page6 = () => {
  return (
    <div className="pb-20 pt-8">
      <div className="flex h-screen w-11/12 m-auto gap-5">
        {/* div left */}
        <div className=" w-1/2   ">
          {/* div img */}
          <div className="h-[70vh] relative overflow-hidden rounded-[3em]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg"
              alt=""
            />
            <img
              className="absolute h-[300px] w-[350px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5em]"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-2000.jpg"
              alt=""
            />
          </div>
          {/* div text */}
          <div className="my-5">
            <p className="text-gray-400 font-semibold">Gaaf Creaties</p>
            <p className="font-bold text-xl">
              Creating mood-boosting experiences
            </p>
            <div className="flex my-4 gap-2">
              <p className="text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]">
                BRAND STORY
              </p>
              <p className="text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]">
                MERKIDENTITEIT
              </p>
              <p className="text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]">
                WEBDESIGN
              </p>
            </div>
          </div>
          {/* text n button section */}
        </div>
        {/* div right */}
        <div className=" w-1/2   ">
          {/* div img */}
          <div className="h-[90vh] relative overflow-hidden rounded-[3em]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-2000.jpg"
              alt=""
            />
            <img
              className="absolute h-[350px] w-[350px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5em] object-cover"
              src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb59c356882b9497fea77_DM_Hand%20Holding%20Pin-min-p-2000.jpg"
              alt=""
            />
          </div>
          {/* div text */}
          <div className="my-5">
            <p className="text-gray-400 font-semibold">Gaaf Creaties</p>
            <p className="font-bold text-xl">
              Creating mood-boosting experiences
            </p>
            <div className="flex my-4 gap-2">
              <p className="text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]">
                BRAND STORY
              </p>
              <p className="text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]">
                MERKIDENTITEIT
              </p>
              <p className="text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]">
                WEBDESIGN
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* text and button section */}
      <div className="flex py-4 px-6 ml-16 gap-48 mt-20 bg-white w-fit rounded-3xl items-center ">
        <p>Ook aan de slag met jouw merk?</p>
        <button className="rounded-xl border-black border px-8 py-3 ">
          Let's Meet
        </button>
      </div>
    </div>
  );
};

export default Page6;
