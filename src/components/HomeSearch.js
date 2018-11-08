import React from 'react'

export const SearchResult = (props) => {
    const { name, html_url, full_name, owner, description } = props.items
    return (
        <div className={'search-result'}>
            <div className={'img-profile-div'}>
                <img style={{backgroundSize: 'contain'}} src={owner.avatar_url} alt={'profile'} className={'img-profile'}/>
            </div>
            <div className={'detail-div'}>
                <h2>{name}</h2>
                <a href={html_url} target={'_blank'}>{full_name}</a>
                <p>Owner : {owner.login}</p>
            </div>
            <div className={'detail-des-div'}>
                <p>{description}</p>
            </div>
        </div>
    )
}