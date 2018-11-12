import React from 'react';
import './../App.css';
import { connect } from 'react-redux';
import {changePagePressed, changePageByTypeURL} from './actions/PageActions'
import { homePage} from './configs/ApiURL'
import { SearchResult } from './HomeSearch';
import { Avatar, CardHeader, IconButton, LinearProgress, } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BackspaceIcon from '@material-ui/icons/Backspace';

class DetailScreen extends React.Component{

    renderResult(){
        if(this.props.searchResult.length >0){
            const result = this.props.searchResult.map((items, i)=>{
                return <SearchResult key={items.id} items={items}/>
            })
            return result
        }else{
            return null
        }
    }

    goHomePress(){
        this.props.changePagePressed(this.props.history, homePage, '')
    }

    renderDetailPage(){
        if(this.props.pageData.length === 0){
            this.props.changePageByTypeURL(this.props.history, this.props.match.params.name)
        }
        const { avatar_url, name, html_url, public_repos, followers, following } = this.props.pageData;

        if(this.props.loadingPage === true){
            return <LinearProgress />
        }else{
            return (
                <div className={'search-block'}>

                <div className={'res-search-block'}>
                    <div className={'header-header-align'}>
                    <CardHeader
                avatar={
                    <Avatar src={avatar_url} alt={name}  />
                }
                action={
                    <div>
                        <IconButton onClick={()=> window.open(html_url, "_blank")}>
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton onClick={()=> this.goHomePress()}>
                        <BackspaceIcon/>
                    </IconButton>
                    </div>
                }
                title={name}
                subheader={'Published : '+ public_repos+'\nFollowers : '+ followers+'\nFollowing : '+ following}

            />
                    </div>
                </div>
                <div className={'res-search-block-card'}>
                {this.renderResult()}
                </div>
            </div>
            )
        }
    }

    render(){
        // console.log(this.props.pageData)
        return (this.renderDetailPage())
    }
}   

const mapStateToProps = state => {
    return {
        searchText: state.search.searchText,
        sort: state.search.sort,
        language: state.search.language,
        order: state.search.order,
        per_page: state.search.per_page,
        pageData : state.search.pageData,
        searchResult: state.search.searchResult,
        loadingPage: state.search.loadingPage
    };
};

export default connect(mapStateToProps,{
    changePagePressed,
    changePageByTypeURL
})(DetailScreen);

//<img
 //               onClick={()=> window.open(html_url, "_blank")}
 //               src={avatar_url} className={'big-img-profile'} alt={'profile'}
 //               />
 //               <h2>{name}</h2>
  //              <button onClick={()=> this.goHomePress()}>Home</button>