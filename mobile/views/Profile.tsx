import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useHistory} from 'react-router-native';
import Nav from '../components/Nav';
import {getProfile} from '../helpers/auth';

const logout = () => {
    AsyncStorage.clear();
};

const Profile = () => {
    const history = useHistory();
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        stars: -1,
    });

    useEffect(() => {
        const setProfileData = async () => {
            const user = await getProfile();
            setProfile(user);
        };
        setProfileData();
    }, []);

    return (
        <View>
            <Nav />
            <View style={styles.div}>
                <Icon
                    name={profile.stars >= 1 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={profile.stars >= 2 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={profile.stars >= 3 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={profile.stars >= 4 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={profile.stars >= 5 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
            </View>
            <Text>{profile.name}</Text>
            <Text>{profile.bio}</Text>
            <Button
                onPress={() => {
                    history.push('/');
                    logout();
                }}
                title="Logout"></Button>
        </View>
    );
};

export const styles = StyleSheet.create({
    div: {
        display: 'flex',
        flexDirection: 'row',
        width: 100,
        height: 50,
    },
});

export default Profile;
