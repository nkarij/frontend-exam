import React from "react";
import { render } from "react-dom";

const WelcomeOverlay = (props) => {
    
    return(
        <div className="welcome__overlay"
        onMouseEnter={props.overlayOn}
        >   
            <img className="welcome__overlay-icon" src={props.icon} alt=""/>
            <h4 className="welcome__overlay-title">Titel</h4>
            <p className="welcome__overlay-sub">Lorem ipsum dolor sinetur est repellat et ad! Earum, 
            Lorem ipsum dolor sinetur est repellat et ad!
            Lorem ipsum dolor sinetur est repellat et ad!
            alias praesentium nobis repellat illum eaque!</p>
        </div>
    )
}

export default WelcomeOverlay;