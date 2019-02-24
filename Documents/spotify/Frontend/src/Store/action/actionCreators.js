import * as actionTypes from "./actiontypes";

export const setSearch = (search) => {
    return {type: actionTypes.setSearch, payload:{search}}
}
