import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux components:
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './store/RootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseconfig from './Config/fbConfig'

const store = createStore(RootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebaseconfig), // redux binding for firebase
    reduxFirestore(firebaseconfig) // redux bindings for firestore
  )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


