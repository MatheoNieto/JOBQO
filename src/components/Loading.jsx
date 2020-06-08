import React from 'react';
import Lottie from 'react-lottie';

import animationLoading from '../assets/lotties/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = () => {
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </>
  );
};

export default Loading;
