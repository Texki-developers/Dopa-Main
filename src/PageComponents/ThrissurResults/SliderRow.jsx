import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'


export default function SliderRow({ direction, images }) {

  const[screenWidth,setScreenWidth] = useState(0)
  const [imageWidth,setImageWidth] = useState(0)

  

  useEffect(() => {
    const img = document.createElement("img");
    img.src= images
   const imageWidth =  img.width
   setScreenWidth(window.innerWidth)
   setImageWidth(imageWidth)

  }, []);

  return (
    <motion.div
    initial={{
      translateX: direction === -1 ? `-${imageWidth - screenWidth}px`: '0px'
    }}
    animate={{
    translateX: direction === -1 ? [`-${imageWidth - screenWidth}px`,'0px',`-${imageWidth - screenWidth}px`] :['0px',`-${imageWidth - screenWidth}px`,'0px'] 
    }}
    transition={{
      duration: screenWidth <=500 ? 15 : 10,
      repeat:Infinity  
    }}
    className="w-[max-content]"
    >
      <img
        style={{
          width:`${imageWidth}px`
        }}

        id="carouselImage"
  
        src={images}
        alt="dopa_thrissur_results"
      />
    </motion.div>
  );
}