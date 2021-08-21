import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Link} from 'react-router-native';
import {getProfile} from '../helpers/auth';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        stars: -1,
    });
    const stars: JSX.Element[] = [];

    useEffect(() => {
        const setProfileData = async () => {
            const user = await getProfile();
            setProfile(user);
        };
        setProfileData();
    }, []);

    return (
        <View>
            <Link to="/">
                <Text>Back</Text>
            </Link>
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
