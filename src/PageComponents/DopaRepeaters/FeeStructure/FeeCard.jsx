import Button from "@/Components/BasicComponents/Button/Button";
import HStack from "@/Components/BasicComponents/HStack/HStack";
import VStack from "@/Components/BasicComponents/VStack/VStack";
import { TeenyiconsTickOutline } from "@/Components/Icons/Icons";
import React from "react";

export default function FeeCard({ data }) {
  return (
    <VStack
      style={{
        border: "2px solid #FFFFFF",
      }} className="rounded-xl p-[1.5rem]"
    >
      <VStack className=' h-[100%] justify-between gap-[2rem]'>
        <VStack className='gap-[1rem]'>
        <VStack className="gap-[1rem] items-center">
          <h2 className="section-heading-Xsmall font-[600]">{data?.title}</h2>
          <HStack>
          <h1 className="section-heading font-[800]">{data?.price}</h1>
          <h1 className="section-heading-Xsmall font-[400] pl-1"> + GST</h1>
          </HStack>


        </VStack>

        <VStack className='gap-[1rem]'>
          { data?.points && data.points.map((items)=>(
            <HStack className='gap-[1rem]'>
            <div className="rounded-full bg-white">
            <TeenyiconsTickOutline />
            </div>
              <p className="text-basic">{items}</p>
          </HStack>
          ))   }
        </VStack>
        </VStack>
        
        <Button className="btn-outlined hover:text-black rounded-full border-white font-[600]">
          Buy Now
        </Button>
      </VStack>
    </VStack>
  );
}
