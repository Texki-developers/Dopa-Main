import React, { useEffect, useState, useRef } from "react";
import {motion} from 'framer-motion'


export default function SliderRow({ direction, images }) {
  const [translateXValue, setTranslateXValue] = useState(0);
  const[screenWidth,setScreenWidth] = useState(0)
  const transitionDuration = 1000; // Adjust the transition duration in milliseconds
  const [imageWidth,setImageWidth] = useState(0)

  

  useEffect(() => {
    const img = document.createElement("img");
    img.src= images
    console.log(images)
   const imageWidth =  img.width
   setImageWidth(imageWidth)
   setScreenWidth(window.innerWidth)
   console.log(imageWidth,"Imagewidth")
  }, []);

  return (
    <motion.div
    initial={{
      translateX: `-${imageWidth - screenWidth}px`
    }}
    animate={{
    translateX: direction === -1 ? [`-${imageWidth - screenWidth}px`,'0px',`-${imageWidth - screenWidth}px`] :['0px',`-${imageWidth - screenWidth}px`,'0px'] 
    }}
    transition={{
      duration: 10,
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
