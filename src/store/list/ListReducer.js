import { 
    CREATE_LIST_ITEM,
    CREATE_LIST_ITEM_ERROR
 } from './ListTypes'


const ListReducer = (
    state = {
        // listItems = [],
        listitems : [
        ]
    }, action) => {
        switch (action.type) {
            case CREATE_LIST_ITEM:
                // console.log("got list data", action.payload)
                return state;
            case CREATE_LIST_ITEM_ERROR:
                // console.log(action.error);
                return state;
            default:
                return state;
        }
};

export default ListReducer;