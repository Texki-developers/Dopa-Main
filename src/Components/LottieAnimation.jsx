import React from 'react';
import dynamic from 'next/dynamic';

const LottieComponent = ({ animationData, loop = true, autoplay = true, width = '3rem', height = '3rem' }) => {
  const [Lottie, setLottie] = React.useState(null);
  
  React.useEffect(() => {
    import('react-lottie').then((module) => {
      setLottie(() => module.default);
    });
  }, []);

  if (!Lottie) {
    return <div style={{ width, height }} />;
  }

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

const LottieAnimation = dynamic(() => Promise.resolve(LottieComponent), {
  ssr: false,
  loading: () => <div style={{ width: '3rem', height: '3rem' }} />
});

export default LottieAnimation;
