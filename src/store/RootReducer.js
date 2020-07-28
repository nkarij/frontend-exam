import AuthReducer from './auth/AuthReducer';
import ListReducer from './list/ListReducer';
import newsletterReducer from './newsletter/newsletterReducer';
// syncing firestore with state in background;
import { firestoreReducer } from 'redux-firestore';
// syncing auth with redux state in background;
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';

// in our state we have these properties, that correspond to the reducers.
// the reducers will update state related to auth    
const RootReducer = combineReducers({
    // these are the props that will be called from mapstatetoprops.
    auth: AuthReducer,
    list: ListReducer,
    newsletter : newsletterReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default RootReducer;