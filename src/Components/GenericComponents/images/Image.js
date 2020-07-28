import React, { Component } from 'react';


import styled from 'styled-components';

export default class Image extends Component {

    render() {
        const { classname, source } = this.props;
        
        return (
            <div className={classname}>
                <img className="image" src={source} alt="" ></img>
            </div>
        )
    }
}


const ImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  ${'' /* opacity: ${({ focused }) => (focused ? 0.5 : 1)}; */}
`

const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${'' /* opacity: ${({ focused }) => (focused ? 0.5 : 1)}; */}
`
