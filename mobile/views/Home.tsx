import React from 'react';
import {Text, View} from 'react-native';
import {Link} from 'react-router-native';

const Home = () => {
    return (
        <View>
            <Text>This is home to the app</Text>
            <Link to="/register">
                <Text>Register</Text>
            </Link>
            <Link to="/login">
                <Text>Login</Text>
            </Link>
            <Link to="/user">
                <Text>Profile</Text>
            </Link>
        </View>
    );
};

export default Home;
