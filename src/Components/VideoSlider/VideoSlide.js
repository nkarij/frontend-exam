import React, { Component } from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";

const Slide = (props) => {
        return (
            <div className="video-slide fade">
                <img className="image" src={props.image} alt="" />
                {/* <AiOutlinePlayCircle  /> */}
                <div className="video-slide__play-wrap">
                    <img className="video-slide__play" src="/assets/icon/Play_btn.svg" alt=""/>
                </div>
            </div>
        )
}

export default Slide;

// styled components virker ikke med galleriet, umiddelbart.