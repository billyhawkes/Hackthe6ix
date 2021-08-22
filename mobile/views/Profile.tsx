import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useHistory} from 'react-router-native';
import Nav from '../components/Nav';
import Stars from '../components/Stars';
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
        <>
            <View style={profileStyles.container}>
                {/* <Image source={}/> */}
                <Icon name="account-circle" size={200} />
                <Text>{profile.name}</Text>
                <Stars starCount={profile.stars} />
                <Text style={profileStyles.description}>{profile.bio}</Text>
                <Button
                    onPress={() => {
                        history.push('/');
                        logout();
                    }}
                    color={'#3AAED8'}
                    title="Logout"></Button>
            </View>
            <Nav />
        </>
    );
};

export const profileStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    description: {
        marginBottom: 20,
    },
});

export default Profile;
