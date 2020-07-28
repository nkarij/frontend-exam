import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class CuNavLink extends Component {
    render() {

        const { className, title } = this.props;
        const route = this.props.to;
        // console.log(route);
        
        return (
            <li className={className}>
                <NavLink to={route}>{title}</NavLink>
            </li> 
        )
    }
}





