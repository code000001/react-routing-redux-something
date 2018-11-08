import {
    onPageChangePressed,
    onPageChangeSucceed,
    onPageChangeFailed,
    onSearchFailed,
    onSearchSucceed
} from './../configs/ActionsTypes'
import axios from 'axios'
import { gitHubUrl,reposUrl } from '../configs/ApiURL';

export const changePagePressed = (history,path, user='') => {

    if(user === ''){
        return (dispatch) => {
            dispatch({ type: onPageChangePressed });
            changeSucceed(dispatch, [])
            history.push(path)
        }  
    }

    return (dispatch) => {
        dispatch({ type: onPageChangePressed });
        axios.get(`${gitHubUrl}${user}`)
                .then(response =>{
                    changeSucceed(dispatch, response.data)
                    axios.get(`${gitHubUrl}${user}${reposUrl}`)
                    .then(responseRepos =>{
                        searchSucceed(dispatch, responseRepos.data)
                        history.push(path+'/'+user)
                    }).catch(error =>{
                        searchFailed(dispatch, error)
                    })
                    
                }).catch(error=>{
                    changeFailed(dispatch, error)
                })
    }
};

export const changePageByTypeURL = (history, user) =>{
    return (dispatch) => {
        dispatch({ type: onPageChangePressed });
        axios.get(`${gitHubUrl}${user}`)
                .then(response =>{
                    changeSucceed(dispatch, response.data)
                    axios.get(`${gitHubUrl}${user}${reposUrl}`)
                    .then(responseRepos =>{
                        searchSucceed(dispatch, responseRepos.data)
                    }).catch(error =>{
                        searchFailed(dispatch, error)
                    })
                }).catch(error=>{
                    changeFailed(dispatch, error)
                    history.push('/')
                })
    }
}

const changeSucceed = (dispatch, data) => {
    dispatch({
        type: onPageChangeSucceed,
        payload: data
    });
};
const changeFailed = (dispatch, data) => {
    dispatch({
        type: onPageChangeFailed,
        payload: data
    });
};
const searchFailed = (dispatch, text) =>{
    dispatch({
        type: onSearchFailed,
        payload: text
    });
};
const searchSucceed = (dispatch, text) =>{
    dispatch({
        type: onSearchSucceed,
        payload: text
    });
};