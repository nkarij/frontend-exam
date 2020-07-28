import React from 'react';
import SoMeMenu from '../SoMeMenu/SoMeMenu';
import styled from 'styled-components';

const EventBar = (props) => {
    const data = props.data;
    if(data){
        return(
            <div className="team-bar">
                <div className="team-bar__info">
                    <p className="team-bar__text">{props.text}</p> */}
                    <h4 className="team-bar__title"> {data.name} </h4>
                    <p className="team-bar__text"> {data.content} </p>
                 </div>
                 <SoMeMenu short={true} urls={data}/>
            </div>
        )
    } else { return null }

}

export default EventBar;


