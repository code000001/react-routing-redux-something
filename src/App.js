import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './components/reducers';
import './App.css';
import  HomeScreen from './components/HomeScreen';
import { DetailScreen } from './components/DetailScreen';

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Switch>
            <Route exact path={'/'} component={HomeScreen}/>
            <Route path={'/detail'} component={DetailScreen}/>
        </Switch>
      </Provider>
    );
  }
}

export default App;
