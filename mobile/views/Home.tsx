import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useHistory} from 'react-router-native';
import {buttonStyles} from '../helpers/styles';

const Home = () => {
    const history = useHistory();
    return (
        <View style={styles.container}>
            <Image
                style={styles.logoText}
                source={require('../media/helpinghandstextonly.png')}
            />
            <Image
                style={styles.logo}
                source={require('../media/helpinghand.png')}
            />
            <TouchableOpacity
                style={buttonStyles.buttonFilled}
                onPress={() => history.push('/register/start')}>
                <Text style={buttonStyles.buttonFilledText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={buttonStyles.buttonHollowed}
                onPress={() => history.push('/login')}>
                <Text style={buttonStyles.buttonHollowedText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => history.push('/profile')}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => history.push('/feed')}>
                <Text>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => history.push('/listing/create')}>
                <Text>Create Listing</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {},
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        marginTop: 150,
        height: 65,
        width: 350,
    },
    logo: {
        marginTop: 30,
        height: 75,
        width: 65,
    },
});

export default Home;
