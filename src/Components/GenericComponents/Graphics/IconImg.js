import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Constants/Theme'

class IconImg extends Component {

    render() {

        const iconSrc = this.props.icon;
        return (
            <IconComp className="icon-comp">
                <IconGraphics className="icon__graphics" src={iconSrc} alt=""/>
            </IconComp>
        )
    }
}

export default IconImg;
 
const IconComp = styled.div`
    height: 20px;
    width: 20px;
    text-align: center;
};`

const IconContainer = styled.div`
    height: 100%;
    width: 100%;
};`

const IconGraphics = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
};`
