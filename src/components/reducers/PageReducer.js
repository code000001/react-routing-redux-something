//THIS FILE IS NOT IN USE.

// import {
//     onPageChangePressed,
//     onPageChangeSucceed,
//     onPageChangeFailed
// } from './../configs/ActionsTypes'

// const iniState = {
//     error: '',
//     loadingPage: false,
//     pageData: []
// }

// export default (state = iniState, action) =>{
//     console.log(action)
//     switch (action.type){
//         case onPageChangePressed:
//         return {...state, loadingPage: true};
//         case onPageChangeSucceed:
//         return {...state, pageData: action.payload, loadingPage: false};
//         case onPageChangeFailed:
//         return {...state, error: action.payload, loadingPage: false}
//         default:
//             return state;
//     }
// };