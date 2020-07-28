import { 
    SIGN_IN_SUCCES, SIGN_IN_ERROR, SIGN_OUT_SUCCES, SIGN_OUT_ERROR 
} from './AuthTypes'

const AuthReducer = ( state = {
        // initial state:
        authError: null,
    }, action) => {
        // return state;
        switch (action.type) {
            case 'SIGN_IN_ERROR':
                // console.log('signin failed')
                return {
                    ...state,
                    authError: "Sign in failed"
                }
            case 'SIGN_IN_SUCCES':
                // console.log("signin succes");
                return {
                    ...state,
                    authError: null     
                }
            case 'SIGN_OUT_SUCCES':
                // console.log("signout succes");
                return {
                    ...state,
                    authError: null     
                }
            case 'SIGN_OUT_ERROR':
                // console.log("sign out error");
                return {
                    ...state,
                    authError: 'sign out error'
                }
            default:
                // console.log("fejl");
                return state;
        }
};

export default AuthReducer;