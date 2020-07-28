import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Constants/Theme'

export default class HeaderLogo extends Component {
    
    render() {

        const { source } = this.props;
        return (
                <div className="logo__container">
                    <img className="logo__graphics" src={source} alt=""/>
                </div>
        )
    }
}
 
const LogoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${'' /* height: 100%;
    width: 100%; */}
};`

const LogoGraphics = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin: auto;
};`

// new Logo;
