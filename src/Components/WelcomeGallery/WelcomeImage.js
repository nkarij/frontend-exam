import React from 'react';

const WelcomeImage = (props) => {

    return(
        <div className="welcome__image-wrapper" 
        >
            <img
            src={props.src} alt="" className="welcome__image"/>
        </div>
    )
}

export default WelcomeImage;