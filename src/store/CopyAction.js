
const ACTION_TYPE_NAME = '';
const ACTION_TYPE_NAME_ERROR = '';

export const crudName = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        // tjek at datastruktur stemmer overens med databasens struktur.
        // console.log(data);
        // make async call:
        const firestore = getFirestore();
        // console.log(firestore);
        firestore.collection('collectionname').add({
            ...data,
        }).then(() => {
            // restart dispatch
            dispatch({
                type: ACTION_TYPE_NAME,
                payload: data
            })
        }).catch((error) => { 
            dispatch({ ACTION_TYPE_NAME_ERROR, error })
            })
    }
}