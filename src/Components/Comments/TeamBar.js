import React from 'react';
import SoMeMenu from '../SoMeMenu/SoMeMenu';
import styled from 'styled-components';

const TeamBar = (props) => {

    if(props.data.comment) {
        const comment  = props.data;
        return(
            <div className="comment-bar">
                <div className="comment-bar__info">
                    <h4 className="team-bar__title"> { comment.name } </h4>
                    <p className="comment-date"> Posted: { comment.createdAt }</p>
                    <p className="team-bar__text"> {comment.comment} </p>
                 </div>
                 { props.blogpost ? null : <SoMeMenu /> }
                 
            </div>
        )
    } else {
        const comment  = props.data;
        // console.log("comment", comment);
        return(
            <div className="comment-bar">
                <div className="comment-bar__info">
                    <h4 className="team-bar__title"> { comment.name } </h4>
                    <p className="comment-date"> Posted: { comment.createdAt }</p>
                    <p className="team-bar__text"> {comment.content} </p>
                 </div>
                 { props.blogpost ? null : <SoMeMenu /> }
            </div>
        )
    }

}

export default TeamBar;


