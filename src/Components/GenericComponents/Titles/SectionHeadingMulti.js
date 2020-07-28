import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../../Constants/Theme'
import { FaCreativeCommonsRemix } from 'react-icons/fa';

const SectionHeadingMulti = (props) => {
    // console.log(props)
    return(
        <div className="section-heading-multi">
            <h2 className ="section-heading-multi__text"> {props.firstln} </h2>
            <h2 className ="section-heading-multi__text" > NIGHT 
                    <span className="section-heading-multi__text section-heading-multi__detail"> CLUB</span>
            </h2>
        </div>
    )
}

export default SectionHeadingMulti;


// const RedDetail = styled.span`
//     color: ${Colors.backgrounds.detail};
//     ${'' /* font-size: ${Fonts.fontSize.sectionHeading}; */}
// };`


// const IconGraphics = styled.img`
//     height: 40px;
//     width: auto;
//     object-fit: cover;
// };`

 
