const EMAIL_TO_DATABASE = 'EMAIL_TO_DATABASE';
const EMAIL_TO_DATABASE_ERROR = 'EMAIL_TO_DATABASE_ERROR';

export const createNewsletterEmail = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        // tjek at datastruktur stemmer overens med databasens struktur.
        // console.log(data);
        // make async call
        const firestore = getFirestore();
        // console.log(firestore);
        firestore.collection('NewsLetterList').add({
            ...data,
        }).then(() => {
            // restart dispatch
            dispatch({
                type: EMAIL_TO_DATABASE,
                payload: data
            })
        }).catch((error) => { 
            dispatch({ EMAIL_TO_DATABASE_ERROR, error })
            })
    }
}