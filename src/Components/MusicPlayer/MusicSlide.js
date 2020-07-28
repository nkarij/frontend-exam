import React, { Component } from 'react';
import { IoMdPlayCircle } from "react-icons/io";

const Slide = (props) => {
        return (
            <div className="music-slide fade" onClick={props.playMusic}>
                <img className="music-slide__image" src={props.image} alt="" />
                <div className="music-slide__overlay">
                    <IoMdPlayCircle className="music-slide__overlay-play" />
                </div>
            </div>
        )
}

export default Slide;
