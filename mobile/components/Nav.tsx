import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useHistory} from 'react-router-native';

const Nav = () => {
    const history = useHistory();
    return (
        <View style={styles.header}>
            <Icon.Button
                onPress={() => history.push('/feed')}
                name="house"
                backgroundColor="#3AAED8"
                style={styles.button}
                size={35}
            />
            <Icon.Button
                onPress={() => history.push('/profile')}
                name="account-circle"
                backgroundColor="#3AAED8"
                style={styles.button}
                size={35}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        height: 50,
        backgroundColor: '#3AAED8',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        height: 50,
    },
});

export default Nav;
