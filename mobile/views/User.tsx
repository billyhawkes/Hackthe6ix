import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useParams} from 'react-router-native';
import Nav from '../components/Nav';
import {profileStyles} from './Profile';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Stars from '../components/Stars';

const getUser = async (id: number) => {
    // const res = await axios.get('/user', {headers: {user_id: id}});
    // const data = await res.data;
    const data = {
        name: 'billy hawkes',
        bio: 'this is me',
        stars: 4,
    };
    return data;
};

const User = () => {
    const {id} = useParams<any>();
    const [user, setUser] = useState({
        name: '',
        bio: '',
        stars: -1,
    });

    useEffect(() => {
        const setUserData = async () => {
            const user = await getUser(id);
            setUser(user);
        };
        setUserData();
    }, []);

    return (
        <>
            <View style={profileStyles.container}>
                <Icon2 name="account-circle" size={200} />
                <Stars starCount={user.stars} />
                <Text>{user.name}</Text>
                <Text>{user.bio}</Text>
            </View>
            <Nav />
        </>
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

export default User;
