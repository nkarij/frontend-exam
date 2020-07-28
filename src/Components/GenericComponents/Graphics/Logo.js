import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Constants/Theme'

export class HeaderLogo extends Component {
    render() {

        const source = this.props.imgSrc
        return (
            <LogoComp className="logo-comp">
                <LogoContainer className="logo__container">
                    <LogoGraphics className="logo__graphics" src={source} alt=""/>
                </LogoContainer>
            </LogoComp>
        )
    }
}
 
const LogoComp = styled.div`
    height: 40px;
    width: 100px;
    text-align: center;
};`

const LogoContainer = styled.div`
    height: 100%;
    width: 100%;
    ${'' /* text-align: center; */}
};`

const LogoContainer = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
};`

// new Logo;
