import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import Navigator from './Navigator';
import EventList from './components/EventList';


type Props = {};
export default class App extends Component<Props> {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <EventList />
      </Provider>
    );
  }
}

