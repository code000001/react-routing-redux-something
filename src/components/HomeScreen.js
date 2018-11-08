import React from 'react'
import { connect } from 'react-redux';
import { searchChanged, searchPressed, sortChanged, languageChanged, orderChanged, perpageChanged } from './actions'
import {changePagePressed} from './actions/PageActions'
import './../App.css';
import { SearchResult } from './HomeSearch';

class HomeScreen extends React.Component {

    onSearchChanged(text) {
        this.props.searchChanged(text);
    }
    onSearchPressed(text, sort, order, lang, perpage) {
        this.props.searchPressed(text, sort, order, lang, perpage)
    }
    onSortChanged(text) {
        this.props.sortChanged(text)
    }
    onLangChanged(text) {
        this.props.languageChanged(text)
    }
    onOrderChanged(text) {
        this.props.orderChanged(text)
    }
    onMaxPageChanged(text) {
        this.props.perpageChanged(text)
    }
    onProfilePressed(){
        this.props.changePagePressed(this.props.history, '/detail')
    }

    renderResult(){
        if(this.props.searchResult.length >0){
            const result = this.props.searchResult.map((items, i)=>{
                return <SearchResult key={items.id} items={items}/>
            })
            return <div className={'result-div'}>{result}</div>
        }else{
            return null
        }
    }

    render() {
        return (
            <div className='App'>
                <h1>HOME</h1>
                <div>
                    <label>Search Word : </label>
                    <input value={this.props.searchText} onChange={(text) => this.onSearchChanged(text.target.value)} />
                </div>
                <div>
                    <label>Sort by : </label>
                    <select value={this.props.sort} onChange={(text) => this.onSortChanged(text.target.value)}>
                        <option value={''}>Default</option>
                        <option value={'stars'}>Rating</option>
                        <option value={'date'}>Date</option>
                    </select>
                    <label> Sort type : </label>
                    <select disabled={this.props.sort === '' ? true : false} value={this.props.order} onChange={(text) => this.onOrderChanged(text.target.value)}>
                        <option value={this.props.sort === '' ? '': 'asc'}>Default</option>
                        <option value={'desc'}>DESC</option>
                    </select>
                </div>
                <div>
                    <label>Language : </label>
                    <select value={this.props.language} onChange={(text) => this.onLangChanged(text.target.value)}>
                        <option value={'all'}>All</option>
                        <option value={'java'}>JAVA</option>
                        <option value={'assembly'}>Assembly</option>
                        <option value={'c'}>C/C++/C#</option>
                        <option value={'swift'}>Swift</option>
                        <option value={'kotlin'}>Kotlin</option>
                    </select>
                    <label> Max result : </label>
                    <select value={this.props.per_page} onChange={(text) => this.onMaxPageChanged(text.target.value)}>
                        <option value={'32'}>Default</option>
                        <option value={'50'}>50</option>
                        <option value={'75'}>75</option>
                        <option value={'100'}>100</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => this.onSearchPressed(this.props.searchText, this.props.sort, this.props.order, this.props.language, this.props.per_page)}> CLICK</button>
                    <button onClick={() => this.onProfilePressed()}>Profile</button>
                </div>
                    {this.renderResult()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchText: state.search.searchText,
        sort: state.search.sort,
        language: state.search.language,
        order: state.search.order,
        per_page: state.search.per_page,
        searchResult : state.search.searchResult,
        path : state.page.path
    };
};

export default connect(mapStateToProps, {
    searchChanged,
    searchPressed,
    sortChanged,
    languageChanged,
    orderChanged,
    perpageChanged,
    changePagePressed
})(HomeScreen)