import React from 'react';

const TeamDot = (props) => {
    return (
        <input onClick={props.getCurrentSlide} className="team-slider-dot" type="radio" />
    )
}

export default TeamDot;