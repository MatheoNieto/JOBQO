import React from 'react';
import Lottie from 'react-lottie';

import animation404 from '../assets/lotties/404.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation404,

};

const NotFound = () => {
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
      />
    </>
  );
};

export default NotFound;
