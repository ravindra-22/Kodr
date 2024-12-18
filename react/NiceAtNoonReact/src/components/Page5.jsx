import React from 'react'

const Page5 = () => {
  return (
   <div className='flex flex-col justify-start m-auto w-11/12'>
     <div className='h-[80vh]  rounded-[3em] overflow-hidden relative'>
      <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg" alt="" />
      <img className='absolute h-[300px] w-[300px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
      rounded-[5em] ' src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN-p-800.jpg" alt="" />
    </div>
     <div className='my-5'>
     <p className='text-gray-400 font-semibold'>Nieuw Schaijk</p>
     <p className='font-bold text-xl'>De smaak van thuis</p>
     <div className='flex my-4 gap-2'>
       <p className='text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]'>BRAND STORY</p>
       <p className='text-xs border-[1px] border-black rounded-[9px] px-3 py-[2.5px]'>MERKIDENTITEIT</p>
     </div>
     </div>
     
   </div>
  )
}

export default Page5
