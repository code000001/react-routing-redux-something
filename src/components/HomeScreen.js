import React from 'react'
import { connect } from 'react-redux';
import { searchChanged, searchPressed, sortChanged, languageChanged, orderChanged, perpageChanged } from './actions'
import { changePagePressed } from './actions/PageActions'
import { detailPage } from './configs/ApiURL'
import './../App.css';
import { SearchResult } from './HomeSearch';
import {
    FormControl,
    InputLabel,
    NativeSelect,
    FormHelperText,
    Button,
    Input,
    TextField,
    LinearProgress,
} from '@material-ui/core';

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
    onProfilePressed() {
        this.props.changePagePressed(this.props.history, detailPage, this.props.searchText)
    }

    renderResult() {
        if (this.props.loadingSearch === true){
            return (
            <LinearProgress color={'primary'}/>
            )
        }else{
          if (this.props.searchResult.length > 0) {
            const result = this.props.searchResult.map((items, i) => {
                return <SearchResult key={items.id} items={items} />
            })
            return <div className={'res-search-block-card'}>{result}</div>
        } else {
            return null
        }  
        }
        
    }

    render() {
        return (
            <div className={'search-block'}>
                <div className={'App-header'}>
                    <div className={'res-search-block'}>
                        <TextField
                            id="standard-full-width"
                            label="Search keyword"
                            style={{ margin: 8 }}
                            value={this.props.searchText}
                            onChange={(text) => this.onSearchChanged(text.target.value)}
                            fullWidth
                            placeholder="Write Something here"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className={'res-search-block'}>
                        <div className={'header-input-align'}>
                            <FormControl>
                                <InputLabel htmlFor="uncontrolled-native">Sort by</InputLabel>
                                <NativeSelect value={this.props.sort} onChange={(text) => this.onSortChanged(text.target.value)} input={<Input name="name" id="uncontrolled-native" />}>
                                    <option value={''}></option>
                                    <option value={'stars'}>Rating</option>
                                    <option value={'updated'}>Date</option>
                                </NativeSelect>
                                <FormHelperText>Sorting by stars or date </FormHelperText>
                            </FormControl>
                        </div>
                        <div className={'header-input-align'}>
                            <FormControl>
                                <InputLabel htmlFor="uncontrolled-native">Sort type</InputLabel>
                                <NativeSelect disabled={this.props.sort === '' ? true : false} value={this.props.order} onChange={(text) => this.onOrderChanged(text.target.value)} input={<Input name="name" id="uncontrolled-native" />}>
                                    <option value={this.props.sort === '' ? '' : 'asc'}></option>
                                    <option value={'desc'}>DESC</option>
                                </NativeSelect>
                                <FormHelperText>ASC by default</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={'header-input-align'}>
                            <FormControl>
                                <InputLabel htmlFor="uncontrolled-native">Language</InputLabel>
                                <NativeSelect value={this.props.language} onChange={(text) => this.onLangChanged(text.target.value)} input={<Input name="name" id="uncontrolled-native" />}>
                                    <option value={'all'}></option>
                                    <option value={'java'}>JAVA</option>
                                    <option value={'assembly'}>Assembly</option>
                                    <option value={'javascript'}>JS</option>
                                    <option value={'html'}>HTML</option>
                                    <option value={'css'}>CSS</option>
                                    <option value={'c'}>C</option>
                                    <option value={'c%2B%2B'}>C++</option>
                                    <option value={'c%23'}>C#</option>
                                    <option value={'pascal'}>Pascal</option>
                                    <option value={'swift'}>Swift</option>
                                    <option value={'kotlin'}>Kotlin</option>
                                </NativeSelect>
                                <FormHelperText>Default will search all language</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={'header-input-align'}>
                            <FormControl>
                                <InputLabel htmlFor="uncontrolled-native">Max Result</InputLabel>
                                <NativeSelect value={this.props.per_page} onChange={(text) => this.onMaxPageChanged(text.target.value)} input={<Input name="name" id="uncontrolled-native" />}>
                                    <option value={''} />
                                    <option value={'35'}>35</option>
                                    <option value={'40'}>40</option>
                                    <option value={'50'}>50</option>
                                </NativeSelect>
                                <FormHelperText>Number of search result</FormHelperText>
                            </FormControl>
                        </div>
                        <div className={'header-btn-align'}>
                            <Button variant='contained' color='default' onClick={() => this.onSearchPressed(
                                this.props.searchText,
                                this.props.sort,
                                this.props.order,
                                this.props.language,
                                this.props.per_page)} disabled={this.props.searchText === '' ? true : false}> Search</Button>
                        </div>
                        <div className={'header-btn-align'}>
                            <Button variant='contained' color='primary' onClick={() => this.onProfilePressed()} disabled={this.props.searchText === '' ? true : false}>Profile</Button>
                        </div>
                    </div>
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
        searchResult: state.search.searchResult,
        loadingSearch: state.search.loadingSearch
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