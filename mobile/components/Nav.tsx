import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useHistory} from 'react-router-native';

const Nav = () => {
    const history = useHistory();
    return (
        <View style={styles.header}>
            <EntypoIcon.Button
                onPress={() => history.push('/feed')}
                name="briefcase-search"
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
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    button: {
        height: 50,
        width: 60,
        textAlign: 'center',
    },
});

export default Nav;
