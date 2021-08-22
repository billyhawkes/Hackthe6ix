import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Link, useHistory} from 'react-router-native';
import Nav from '../components/Nav';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const categoryIcons = [
    {
        name: 'yard',
        icon: (
            <MaterialCommunityIcon
                name="shovel"
                size={50}
                key="1"
                color="#3c3c3c"
            />
        ),
    },
    {
        name: 'tech',
        icon: (
            <MaterialCommunityIcon
                name="mouse"
                size={50}
                key="2"
                color="#3c3c3c"
            />
        ),
    },
    {
        name: 'babysitting',
        icon: (
            <MaterialCommunityIcon
                name="baby-carriage"
                size={50}
                key="3"
                color="#3c3c3c"
            />
        ),
    },
];

const getFeed = async () => {
    // const res = await axios.get('/feed');
    // const data = await res.data;
    const data = {
        posts: [
            {
                id: '123',
                title: 'Need someone to shovel my driveway',
                category: 'babysitting',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
                duration: 40,
                user: {
                    name: 'Billy Hawkes',
                    id: 1234567,
                },
            },
            {
                id: '123,',
                title: 'Need someone to shovel my driveway',
                category: 'tech',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
                duration: 40,
                user: {
                    name: 'Billy Hawkes',
                    id: 1234567,
                },
            },
            {
                id: '134',
                title: 'Need someone to shovel my driveway',
                category: 'yard',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
                duration: 40,
                user: {
                    name: 'Billy Hawkes',
                    id: 1234567,
                },
            },
        ],
    };
    return data.posts;
};

const Feed = () => {
    const [feed, setFeed] = useState();
    const history = useHistory();

    const renderItem = ({item}: any) => (
        <TouchableOpacity onPress={() => history.push(`/listing/${item.id}`)}>
            <View style={styles.post}>
                <View style={styles.postIcon}>
                    {categoryIcons.map(
                        icon => icon.name === item.category && icon.icon,
                    )}
                </View>
                <View style={styles.postText}>
                    <View style={styles.titleContainer}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                            style={styles.titleText}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <Link to={`/user/${item.id}`}>
                            <Text>{item.user.name}</Text>
                        </Link>
                    </View>
                    <Text>Pays: ${item.cost}</Text>

                    <Text>Est. Duration: {item.duration}m</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    useEffect(() => {
        getFeed().then((posts: any) => setFeed(posts));
    }, []);

    return (
        <>
            <View>
                <FlatList
                    data={feed}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Nav />
        </>
    );
};

export const styles = StyleSheet.create({
    post: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 5,
    },
    postText: {
        marginLeft: 20,
    },
    postIcon: {
        color: '#3AAED8',
        marginLeft: 10,
        justifyContent: 'center',
    },
    titleText: {
        flex: 1,
        flexShrink: 1,
        fontSize: 18,
        width: 100,
    },
    titleContainer: {
        width: 260,
        display: 'flex',
        flexDirection: 'row',
    },
    profileContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
});

export default Feed;
