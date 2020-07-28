
const ACTION_TYPE_NAME = '';
const ACTION_TYPE_NAME_ERROR = '';

const nameReducer = (state = {

    }, action) => {
        switch (action.type) {
            case ACTION_TYPE_NAME:
                // console.log("created email", action.payload)
                return state;
            case ACTION_TYPE_NAME_ERROR:
                // console.log(action.error);
                return state;
            default:
                return state;
        }
}

export default nameReducer;