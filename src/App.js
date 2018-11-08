import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './components/reducers';
import './App.css';
import  HomeScreen from './components/HomeScreen';
import  DetailScreen from './components/DetailScreen';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
            <Route exact path={'/'} component={HomeScreen}/>
            <Route path={'/detail/:name'} component={DetailScreen}/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
