import {
    onPageChangePressed,
    onPageChangeSucceed
} from './../configs/ActionsTypes'

const iniState = {
    path: '',
    loadingPage: false
}

export default (state = iniState, action) =>{
    console.log(action)
    switch (action.type){
        case onPageChangePressed:
        return {...state, loadingPage: true};
        case onPageChangeSucceed:
        return {...state, path: action.payload, loadingPage: false};
        default:
            return state;
    }
};