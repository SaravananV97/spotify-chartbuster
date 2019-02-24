import * as actionTypes from "../action/actiontypes";

const initState = {
    search:""
}

const mainReducer = (state = initState, action) => {

    switch(action.type){
        case actionTypes.setSearch:
            return {...state, search: action.payload.search};
        default: return {...state};   
    }
}; 
export default mainReducer;


