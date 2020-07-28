import React from 'react';

const Dot = (props) => {
    return (
        <input onClick={props.getCurrentSlide} className="slider-dot" type="radio" />
    )
}

export default Dot;