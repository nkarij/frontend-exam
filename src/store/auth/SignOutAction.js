import { 
    SIGN_IN_SUCCES, SIGN_IN_ERROR, SIGN_OUT_SUCCES, SIGN_OUT_ERROR
 } from './AuthTypes'


 export const SignOutAction = (data) => ({
    type: 'SIGN_OUT_ERROR', 
    payload: data,      
})



// const SignOutAction = () => {
//     return (dispatch, getState, { getFirebase }) => {
//         // tjek at datastruktur stemmer overens med databasens struktur.
//         console.log("test");
//         // make async call:
//         const firebase = getFirebase();
//         console.log("firebase", firebase);
//         firebase.auth().signOut().then(() => {
//             dispatch({
//                 type: 'SIGN_OUT_SUCCES',
//             })
//         }).catch((error) => {
//             dispatch({
//                 type: 'SIGN_OUT_ERROR',
//                 payload: error
//             })
//         })
//     }
// }

export default SignOutAction