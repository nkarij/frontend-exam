const EMAIL_TO_DATABASE = 'EMAIL_TO_DATABASE';
const EMAIL_TO_DATABASE_ERROR = 'EMAIL_TO_DATABASE_ERROR';

const newsletterReducer = (state = {
    email: null,
    emailList : [

    ]

    }, action) => {
        switch (action.type) {
            case EMAIL_TO_DATABASE:
            return {
                ...state,
                // this (left side) is the keyword that you will call in the mapStateToProps
                emailList: [...state.emailList, action.payload],
                email: action.payload,
                isLoading: false,
                }
            case EMAIL_TO_DATABASE_ERROR:
                // console.log(action.error);
                return state;
            default:
                return state;
        }
}

export default newsletterReducer;