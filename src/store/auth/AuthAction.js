import { 
    SIGN_IN_SUCCES, SIGN_IN_ERROR, SIGN_OUT_SUCCES, SIGN_OUT_ERROR
 } from './AuthTypes'


export const signInAction = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // tjek at datastruktur stemmer overens med databasens struktur.
        // console.log("Busse");
        // make async call:
        const firebase = getFirebase();
        // console.log(firebase)
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: SIGN_IN_SUCCES,
                // no payload needed
            })
        }).catch((error) => {
            dispatch({
                type: SIGN_IN_ERROR,
                payload: error
            })
        })
    }
}


