import {
    onPageChangePressed,
    onPageChangeSucceed
} from './../configs/ActionsTypes'

export const changePagePressed = (history,path) => {

    return (dispatch) => {
        dispatch({ type: onPageChangePressed });
        setTimeout(() => {
            history.push(path)
            changeSucceed(dispatch, path)
        }, 1000)
    }
};

const changeSucceed = (dispatch, text) => {
    dispatch({
        type: onPageChangeSucceed,
        payload: text
    });
};