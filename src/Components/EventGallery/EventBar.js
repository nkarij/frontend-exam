import React from 'react';
import styled from 'styled-components';

const EventBar = (props) => {
    const data = props.data;
    // console.log("eventbar", data)
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateObject = new Date(props.data.eventDate);
    let date = dateObject.toLocaleDateString("en-US", options);
    return(
        <div className="event-bar">
            <p className="event-date">{data.eventName}</p>
            <p className="event-time">{date}</p>
            <p className="event-city">{data.location}</p>
        </div>
    )
}

export default EventBar;


