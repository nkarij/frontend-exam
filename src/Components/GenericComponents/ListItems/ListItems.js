import React, { Component } from 'react'

// remember a parentid.
export class ListItem extends Component {

    // handleClickEvent = (e, id) => {
    //     // setting id in redux state (detailParameter)
    //     console.log(id);
    // }

    render() {
        const  dataset  = this.props.data;
        // console.log(dataset);
        // const {data } = this.props;

        return(        
            <li className="list-item" 
            // onClick={
            //     (e) => this.handleClickEvent(e, dataset.id)
            //     }
                >
                    <p className="list-item__title">{dataset.title}</p>
                    <p className="list-item__sub">{dataset.sub}</p>
            </li>
        )
    }
}



