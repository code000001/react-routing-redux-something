import {
    onSearchChanged,
    onSearchPressed,
    onSearchSucceed,
    onSearchFailed,
    onSortChanged,
    onLanguageChanged,
    onOrderChanged,
    onPerpageChanged,
    onPageChanged
} from './../configs/ActionsTypes'
import axios from 'axios'
import {  gitHubUrlSearch ,reposSearchUrl, reqWords, comLang, sortBy, orderType,maxPerPage } from '../configs/ApiURL';
// reqWords, comLang, sortBy, orderType,maxPerPage

export const languageChanged = (text) =>{
    return {
      type: onLanguageChanged,
      payload: text  
    };
};

export const searchChanged = (text) =>{
    return {
      type: onSearchChanged,
      payload: text  
    };
};
export const sortChanged = (text) =>{
    return {
      type: onSortChanged,
      payload: text  
    };
};

export const orderChanged = (text) =>{
    return {
      type: onOrderChanged,
      payload: text  
    };
};

export const perpageChanged = (text) =>{
    return {
      type: onPerpageChanged,
      payload: text  
    };
};
export const pageChanged = (text) =>{
    return {
      type: onPageChanged,
      payload: text  
    };
};


export const searchPressed = (searchText, sort, order, lang, perpage)=>{
    const extendSearchURL = reqWords+searchText+comLang+ (lang==='' ? 'all' : lang)+(sort !== ''? sortBy+sort :'')+(order !== '' ? orderType+order: '')+(perpage!== '' ? maxPerPage+perpage : maxPerPage+'32')
    return (dispatch) =>{
        dispatch({type: onSearchPressed});
                // console.log(response.data.message )
                axios.get(`${gitHubUrlSearch}${reposSearchUrl}${extendSearchURL}`)
                .then(responeRepos =>{
                    searchSucceed(dispatch, responeRepos.data.items)
                }).catch(error=>{
                    searchFailed(dispatch, error)
                })
    }
};

const searchSucceed = (dispatch, text) =>{
    dispatch({
        type: onSearchSucceed,
        payload: text
    });
};

const searchFailed = (dispatch, text) =>{
    dispatch({
        type: onSearchFailed,
        payload: text
    });
};