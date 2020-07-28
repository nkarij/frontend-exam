import React from 'react';
import styled from 'styled-components';
import { Colors, Fonts } from '../../../Constants/Theme'

const SectionHeading = (props) => {
    return(
        <div className="section-heading">
            <h2 className="section-heading__text">{props.white}
                    <span className="section-heading__detail">{props.detail}</span>
            </h2>
        </div>
    )
}

export default SectionHeading;



 
