import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../../Constants/Theme'
import LogoTagLine from './LogoTagLine'

class NavbarTitle extends Component {

    render() {

        const source = this.props.imgSrc;
        return (            
            <div className="navbar-title">
                <img className="navbar-title__image" src="/assets/icon/Logo_main.svg"></img>
            </div>
        )
    }
}

export default NavbarTitle;

const IconGraphics = styled.img`
    height: 40px;
    width: auto;
    object-fit: cover;
};`

 
// const Heading = styled.div`
//     font-family: ${Fonts.fontFam.ubuntu };
//     line-height: ${Fonts.lineHeight.heading};
//     color: ${Fonts.colors.primaryColor};
//     letter-spacing: 0.075em;
//     font-weight: 700;
//     font-size: ${Fonts.fontSize.sectionHeading};
// };`

// const HeadingDetail = styled.span`
//     color: ${Colors.backgrounds.detail};
//     font-size: ${Fonts.fontSize.sectionHeading};
// };`