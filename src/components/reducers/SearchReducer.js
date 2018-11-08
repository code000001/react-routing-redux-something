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

const iniState = {
    sort: '',
    language: '',
    order: '',
    per_page: '',
    page: '',
    searchText : '',
    loadingSearch : false,
    searchResult: []
}

export default (state = iniState, action) =>{
    console.log(action)
    switch (action.type){
        case onSearchChanged:
        return {...state, searchText: action.payload};
        case onSortChanged:
        return {...state, sort: action.payload};
        case onLanguageChanged:
        return {...state, language: action.payload};
        case onOrderChanged:
        return {...state, order: action.payload};
        case onPerpageChanged:
        return {...state, per_page: action.payload};
        case onPageChanged:
        return {...state, page: action.payload};
        case onSearchPressed:
        return {...state, loadingSearch: true, searchResult: iniState.searchResult};
        case onSearchSucceed:
        return {...state, loadingSearch: false, searchResult: action.payload};
        case onSearchFailed:
        return {...state, loadingSearch: false};
        default:
            return state;
    }
};