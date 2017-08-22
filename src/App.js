import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBRv9LosEN1HAJ8xRiHJvQNwwaK6KdXyws',
            authDomain: 'manager-react-native-redux.firebaseapp.com',
            databaseURL: 'https://manager-react-native-redux.firebaseio.com',
            projectId: 'manager-react-native-redux',
            storageBucket: '',
            messagingSenderId: '834496860313'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
