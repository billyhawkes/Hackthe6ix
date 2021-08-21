import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Link, useHistory} from 'react-router-native';
import Nav from '../components/Nav';

const getFeed = async () => {
    // const res = await axios.get('/feed');
    // const data = await res.data;
    const data = {
        posts: [
            {
                id: '123',
                title: 'Need someone to shovel my driveway',
                category: 'Shoveling',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
                user: {
                    name: 'Billy Hawkes',
                    id: 1234567,
                },
            },
            {
                id: '123,',
                title: 'Need someone to shovel my driveway',
                category: 'Shoveling',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
                user: {
                    name: 'Billy Hawkes',
                    id: 1234567,
                },
            },
            {
                id: '134',
                title: 'Need someone to shovel my driveway',
                category: 'Shoveling',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
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

    const renderItem = ({item}: any) => (
        <View style={styles.post}>
            <Text>{item.title}</Text>
            <Link to={`/user/${item.id}`}>
                <Text>{item.user.name}</Text>
            </Link>
            <Text>Cost: ${item.cost}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
        </View>
    );

    useEffect(() => {
        getFeed().then((posts: any) => setFeed(posts));
    }, []);

    return (
        <View>
            <Nav />
            <FlatList
                data={feed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export const styles = StyleSheet.create({
    post: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 5,
    },
});

export default Feed;
