import React from 'react';

const SlideBar = (props) => {
    // console.log("slidebar", props.data)
    const data = props.data;
    if(props.data){
        return(
            <div className="event__overlay-slidebar">
                <h5 className="event__overlay-title">{data.eventName}</h5>
                <p className="event__overlay-sub"> {data.eventDescription} </p>
            </div>
        )
    } else { return null }
}

export default SlideBar;