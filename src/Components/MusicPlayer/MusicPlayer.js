import React, { Component } from 'react'
import Image from '../GenericComponents/images/Image';
import TrackHeading from './TrackHeading'
import { AiFillSound, AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { TiArrowShuffle } from "react-icons/ti";

export default class MusicPlayer extends Component {

    // renderPlayPause = () => {
    //     this.setState
    //     return (
    //         ((this.state.isLoading === false)? <PlayListItem data={this.state.dataSource} /> : console.log("fejl i renderview, i alltrackslist.js"))
    //       )
    //     }

    slideRangeHandle = (e) => {
        let inputElement = e.target;
        // console.log(slider);
        let output = inputElement.value;

        inputElement.value = output;
    }

    render() {
        return (
            <div className="music-player-section">
                <Image source={"/assets/content-img/track_thumb.jpg"} classname={"player-image-wrapper"} />

                <div className="audio-controller">
                    <TrackHeading title={"YOU BELONG WITH ME"} />
                    <div className="audio-range-wrapper">
                        <input 
                        onChange={(e) => {this.slideRangeHandle(e)}}
                        type="range" defaultValue="0" name="trackrange" id="track-range"/>
                    </div>
                    <label className="track-time" htmlFor="trackrange">00:00:00</label>
                    <div className="audio-controls">
                        
                        <div className="audio-range-wrapper reset" >
                        <label className="track-time-desktop" htmlFor="trackrange">00:00:00</label>
                            <AiOutlinePlayCircle className="track-play" />
                            <div className="track-filler"></div>
                            <TiArrowShuffle className="track-shuffle" />
                        </div>
                        <div className="audio-range-wrapper">
                            <label htmlFor="soundrange"> 
                                <AiFillSound className="sound-speaker" /> 
                            </label>
                            <input 
                            onChange={(e) => {this.slideRangeHandle(e)}}
                            type="range" defaultValue="0" name="soundrange" id="sound-range"/>
                        </div>
                    </div>



                    <audio id="audio-player" ref={ref => this.player = ref}  />
                </div>
            </div>
        )
    }
}
