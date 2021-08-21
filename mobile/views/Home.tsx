import React from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Link, useHistory} from 'react-router-native';

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
                style={styles.registerButton}
                onPress={() => history.push('/register')}>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => history.push('/login')}>
                <Text style={styles.loginText}>Login</Text>
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
    loginButton: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3AAED8',
        width: 230,
        height: 40,
        textAlign: 'center',
        backgroundColor: '#F2F2F2',
        borderStyle: 'solid',
        borderColor: '#3AAED8',
        borderWidth: 3,
        borderRadius: 20,
    },
    registerButton: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 40,
        textAlign: 'center',
        backgroundColor: '#3AAED8',
        borderRadius: 20,
    },
    loginText: {
        color: '#3AAED8',
        fontWeight: 'bold',
    },
    registerText: {
        color: '#F2F2F2',
        fontWeight: 'bold',
    },
});

export default Home;
