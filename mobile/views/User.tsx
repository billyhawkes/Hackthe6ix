import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useParams} from 'react-router-native';
import Nav from '../components/Nav';

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
        <View>
            <Nav />
            <View style={styles.div}>
                <Icon
                    name={user.stars >= 1 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={user.stars >= 2 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={user.stars >= 3 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={user.stars >= 4 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
                <Icon
                    name={user.stars >= 5 ? 'star' : 'staro'}
                    size={30}
                    color="#ccc"
                />
            </View>
            <Text>{user.name}</Text>
            <Text>{user.bio}</Text>
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

export default User;
