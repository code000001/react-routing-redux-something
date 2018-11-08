import React from 'react';
import './../App.css';

export class DetailScreen extends React.Component{

    render(){
        const { match } = this.props;

        return (
            <div className='App'>
                <h1>Detail</h1>
                <h2>Name : {match.params.name}</h2>
            </div>
        )
    }
}   