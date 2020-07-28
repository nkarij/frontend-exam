import { 
    CREATE_LIST_ITEM,
    CREATE_LIST_ITEM_ERROR, 
 } from './ListTypes'


// thunk action function
export const createListItems = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        // tjek at datastruktur stemmer overens med databasens struktur.
        // console.log(data);
        // make async call:
        // const firestore = getFirestore();
        // // console.log(firestore);
        // firestore.collection('collectionname').add({
        //     ...data,
        // }).then(() => {
        //     // restart dispatch
        //     dispatch({
        //         type: CREATE_LIST_ITEM,
        //         payload: data
        //     })
        // }).catch((error) => { 
        //     dispatch({ CREATE_LIST_ITEM_ERROR, error })
        //     })
    }
}