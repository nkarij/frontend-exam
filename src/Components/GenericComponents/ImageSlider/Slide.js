import React, { Component } from 'react';

const Slide = (props) => {
        return (
            <div className="slide fade">
                <img className="gen-image" src={props.image} alt="" />
            </div>
        )
}

export default Slide;

// styled components virker ikke med galleriet, umiddelbart.