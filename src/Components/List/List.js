import React, { Component } from 'react';
import { H2Subtitle } from '../GenericComponents/Titles/Subtitles';
import { ListItem } from '../GenericComponents/ListItems/ListItems';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Routes from '../../Constants/Routes'


class List extends Component {
    
    state = {
        isLoading: true,
    }

    componentDidMount = () => {
        this.setState({
            isLoading: false,
        })
    }

    render() {
        // getting the redux state through props.
        const list = this.props.listItemsFS;
        // const {} = this.props;
        // console.log(list);

        if(this.state.isLoading === false ) {
            // console.log(this.state.isLoading)
            return(
                <div className="list-section">
                    <H2Subtitle subtitle={"Some title"} />
                    <ul>
                        {list && list.map(dataset => (
                            <Link to={'/list/' + dataset.id} key={dataset.id}>
                                <ListItem  data={dataset} />
                            </Link>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    // console.log("list state w firestore", state);
    return {
        // from redux state : reducerstate.rootreducerprop.reducerprop. not needed when using firebase
        // listItems: state.list.listemsitems,
        // from  firestore: name : state.firestore.data/ordered>collectionName
        listItemsFS: state.firestore.ordered.List
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'List'}
    ])
)(List)



