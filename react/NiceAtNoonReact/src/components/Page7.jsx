import React from "react";

const Page7 = () => {
  return (
    <div className="bg-[#F4F4F1] w-full">
      <div className=" w-11/12 m-auto">
        <h5 className="pt-14 pb-10">Services</h5>
        {/* text and anchor btn */}
        <div className="flex justify-between">
          <h3 className="font-semibold text-3xl">
            Zo onderscheiden we je
            <br /> van de norm
          </h3>
          <button className="rounded-xl bg-black text-white border px-12 h-14 ">
            Lees meer
          </button>
        </div>
        {/* 4 img-card tiles */}
        <div className="flex w-12/12 h-full py-10 gap-5">
          {/* 1 div img - card */}
          <div className="w-2/4 rounded-t-3xl overflow-hidden">
            {/* div image top*/}
            <div className="h-[45%] w-full">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg"
                alt=""
              />
            </div>
            {/* div text card bottom */}
            <div className=" flex flex-col h-[35%] w-full bg-[#AA81B7] gap-10 px-8 py-5 rounded-b-3xl">
              <h3 className="text-white text-2xl font-semibold">Brand Story</h3>
              <p className="text-white text-lg w-72 ">
                Samen creëren we een sterk fundament voor een onweerstaanbaar
                design.
              </p>
            </div>
          </div>
          {/* 2 div img-card */}
          <div className="w-2/4 rounded-t-3xl overflow-hidden">
            {/* div image top*/}
            <div className="h-[45%] w-full">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg"
                alt=""
              />
            </div>
            {/* div text card bottom */}
            <div className=" flex flex-col h-[35%] w-full bg-[#10100F] gap-10 px-8 py-5 rounded-b-3xl">
              <h3 className="text-white text-2xl font-semibold">Merkidentiteit</h3>
              <p className="text-white text-lg w-72 ">De visuele vertaling van jouw merkverhaal. Een herkenbaar en onvergetelijk merkbeeld.
              </p>
            </div>
          </div>
          {/* 3 div img-card */}
          <div className="w-2/4 rounded-t-3xl overflow-hidden">
            {/* div image top*/}
            <div className="h-[45%] w-full">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg"
                alt=""
              />
            </div>
            {/* div text card bottom */}
            <div className=" flex flex-col h-[35%] w-full bg-[#36A96A] gap-10 px-8 py-5 rounded-b-3xl">
              <h3 className="text-white text-2xl font-semibold">Webdesign</h3>
              <p className="text-white text-lg w-72 ">
              Merkgerichte websites op een methodische wijze. Custom made & tailor made.
              </p>
            </div>
          </div>
          {/* 4 div img-card */}
          <div className="w-2/4 rounded-t-3xl overflow-hidden">
            {/* div image top*/}
            <div className="h-[45%] w-full">
              <img
                className="h-full w-full object-cover"
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-500.jpg"
                alt=""
              />
            </div>
            {/* div text card bottom */}
            <div className=" flex flex-col h-[35%] w-full bg-[#FA8A58] gap-10 px-8 py-5 rounded-b-3xl">
              <h3 className="text-white text-2xl font-semibold">À la carte</h3>
              <p className="text-white text-lg w-72 ">
                Ondersteuning op het gebied van design, social media
                en content creatie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page7;
