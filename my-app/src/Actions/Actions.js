import { userConstants } from "../Constants/constants";
import { userService } from "../Services/Services";

export const userActions = {
    booksAction,
};

function booksAction(articles) {
    return async (dispatch) => {
        const response = await userService.books(articles);
        console.log(response);
        if (response) {
            dispatch({
                type: userConstants.BOOKS_SUCCESS,
                data: response.articles,
            });
        } else {
            dispatch({ type: userConstants.BOOKS_FAILURE, data: {} });
        }
    };
}
