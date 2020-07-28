import React from "react";
import { render } from "react-dom";
import SlideButton from './SlideButton';
import SlideBar from './SlideBar'

const EventOverlay = (props) => {
    // console.log(props.data)
    if(props.data){
        return(
            <div className="event__overlay"
            // onMouseEnter={props.overlayOn}
            // onMouseLeave={props.overlayOff}
            >   
                <SlideButton />
                <SlideBar data={props.data} />
            </div>
        )
    }

}

export default EventOverlay;