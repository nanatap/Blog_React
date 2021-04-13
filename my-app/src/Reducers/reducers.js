import { userConstants } from "../Constants/constants";

// let user = JSON.parse(localStorage.getItem("user"));
const initialState = {};

export function books(state = initialState, action) {
    switch (action.type) {
        case userConstants.BOOKS_SUCCESS:
            console.log(action.data);
            return {
                ...state,
                articlesDisplayed: true,
                articlesNotDisplayed: false,
                article: action.data,
            };
        case userConstants.BOOKS_FAILURE:
            return {
                ...state,

                articlesDisplayed: false,
                articlesNotDisplayed: false,
                article: action.data,
            };

        default:
            return state;
    }
}
