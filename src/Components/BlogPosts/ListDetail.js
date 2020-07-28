import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import BaseCard from '../GenericComponents/Cards/BaseCard';

// styling:
import styled from 'styled-components';

class ListDetail extends React.Component {

    state = {
        isLoading: true,
    }
    componentDidMount() {
        this.setState({isLoading : false})
    }

    render() {
        // getting the route-id in mapStateToProps - passed from parent, that have acces to navigation.
        const item = this.props.listitem;
        if(item) {
            return ( 
                <div className="list-detail-comp">
                    <BaseCard title={item.title} sub={item.sub} icon={"D"} />
                </div> 
            )
        } else {
            return(
                <div>Loading...</div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const getId = ownProps.id;
    const ListItems = state.firestore.data.List;
    let result = ListItems ? ListItems[getId] : null;
    // console.log(result)
    let item;
    if(result) {
        item = result;
    }
    return {
        listitem: item,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'List'}
    ])
)(ListDetail)





