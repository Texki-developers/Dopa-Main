import React from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = ({ animationData, loop = true, autoplay = true, width = '3rem', height = '3rem' }) => {
  const defaultOptions = {
    loop,
    autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
