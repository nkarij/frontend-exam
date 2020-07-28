import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../Constants/Theme'

class Icon extends Component {

    render() {
        // this recieves a react-icon comp.
        const icon = this.props.icon;
        return (
            <IconComp className="icon-comp">
                {icon}
            </IconComp>
        )
    }
}

export default Icon;
 
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
