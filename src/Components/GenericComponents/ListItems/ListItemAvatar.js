import React, { Component } from 'react';


// remember a parentid.
export class ListItemAvatar extends Component {
    handleClickEvent = (e, id) => {
        e.preventDefault();
        // setting id in redux state (detailParameter)
        // console.log(id);
    };
    render() {
        const dataset = this.props.data;
        // console.log(dataset);
        const { data } = this.props;
        return (<li className="list-item" onClick={(e) => this.handleClickEvent(e, dataset.id)}>
            <a href="" className="list-item__anchor">
                <div className="list-item__avatar-wrapper">
                    <img className="list-item__avatar" src="" />
                    <p className="list-item__title"></p>
                    <p className="list-item__sub"></p>
                </div>
            </a>
        </li>);
    }
}
