/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './views/Home';
import Register from './views/Register';
import {NativeRouter, Route} from 'react-router-native';
import Login from './views/Login';
import Profile from './views/Profile';
import Feed from './views/Feed';
import CreateListing from './views/CreateListing';
import User from './views/User';

const App = () => {
    return (
        <NativeRouter>
            <SafeAreaView>
                <StatusBar />
                <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
            </SafeAreaView>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/user/:id">
                <User />
            </Route>
            <Route path="/feed">
                <Feed />
            </Route>
            <Route path="/listing/create">
                <CreateListing />
            </Route>
        </NativeRouter>
    );
};

export default App;
