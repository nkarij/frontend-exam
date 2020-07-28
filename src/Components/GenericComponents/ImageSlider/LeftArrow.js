import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const LeftArrow = (props) => {
  return (
    <div className="backArrow">
      <FaArrowAltCircleLeft 
      // onClick={props.goToPrevSlide} 

      />
    </div>
  );
}

export default LeftArrow;