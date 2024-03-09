import Center from "@/Components/BasicComponents/Center/Center";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import React, { useState,useEffect} from "react";
import BannerForm from "./Form";
import Image from 'next/image'


export default function Tbanner() {
  const [width,setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  
  return (
    <Center 
    style={{
      background:'url("/Assets/thrissurLanding/banner/Rectangle.png")',
      backgroundRepeat:'no-repeat',
      backgroundPosition:`center`,
      backgroundSize:'cover',
    
    }}
    >
      <HStack className='w-[100%] common-space-x'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr,1fr] lg:grid-cols-[2fr,1.5fr] xl:grid-cols-[2fr,1.3fr] w-[100%] md:gap-[2rem]'>
        <div className="relative aspect-[4/4] md:aspect-[4/1] w-[100%] h-[100%] flex items-end justify-end">
          <Image
            src="/Assets/thrissurLanding/banner/dopa_thrissur_landing.png"
            alt="thrissur_landing"
            fill
          />
        </div>
        <div className='w-[100%]  py-[4rem]'>
        <BannerForm/> 
        </div>

        </div>
    
      </HStack>
    </Center>
  );
}
