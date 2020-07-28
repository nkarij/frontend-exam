import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class MenuLink extends Component {

    handleUnActiveLinks = (e) => {
        // e.preventDefault();
        console.log(e.currentTarget)
        let links = document.querySelectorAll(".shared-links__item");
        for (let index = 0; index < links.length; index++) {
            const link = links[index];
            if(link != e.currentTarget){
                link.classList.remove("link-active");     
            }
        }
        e.currentTarget.classList.add("link-active");
    }

    render() {

        const { className, title } = this.props;
        // const route = this.props.to;
        console.log(route);

        return (
            <li className={className}>
                <NavLink className={"shared-links__item"}  to={route}>{title}</NavLink>
            </li> 
        )
    }
}





