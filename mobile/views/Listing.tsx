import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';
import {Link, useParams} from 'react-router-native';
import Nav from '../components/Nav';
import {buttonStyles, formStyles} from '../helpers/styles';
import {styles} from './Register';
import {categoryIcons} from './Feed';

const topNavIcons = [
    {
        icon: <Icon name="arrowleft" size={50} key="1" color="#3c3c3c" />,
    },
];

const Listing = () => {
    const {id} = useParams<any>();
    const [listing, setListing] = useState<any>({
        id: '',
        title: '',
        category: '',
        description: '',
        cost: -1,
        duration: -1,
        user: {
            name: '',
            id: -1,
        },
    });

    useEffect(() => {
        const getListing = async () => {
            // const res = await axios.get(`/listing/${id}`);
            // const data = await res.data;
            const data = {
                id: '123',
                title: 'Need someone to shovel my driveway Need someone to shovel my driveway',
                category: 'yard',
                description:
                    'I live near high park and need someone to come and help me clear my driveway. Thanks.',
                cost: 20,
                duration: 40,
                user: {
                    name: 'Billy Hawkes',
                    id: 1234567,
                },
            };
            setListing(data);
        };
        getListing();
    }, []);
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <View style={listingStyles.backArrow}>
                <Icon name="arrowleft" size={40}></Icon>
            </View>

            <View style={listingStyles.container}>
                <View style={listingStyles.imagePreview}>
                    <Image source={require('../media/leaves.jpg')} />
                </View>

                <View>
                    <View style={listingStyles.postIcon}>
                        {categoryIcons.map(
                            icon => icon.name === listing.category && icon.icon,
                        )}
                    </View>
                    <View style={listingStyles.titleContainer}>
                        <Text style={listingStyles.titleText}>
                            {listing.title}
                        </Text>
                    </View>
                    <View style={listingStyles.profileContainer}>
                        <Link to={`/user/${listing.id}`}>
                            <Text>{listing.user.name}</Text>
                        </Link>
                    </View>
                    <Text>Pays: ${listing.cost}</Text>

                    <Text>Est. Duration: {listing.duration}m</Text>
                </View>
            </View>
            <Nav />
        </>
    );
};

export const listingStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    imagePreview: {
        display: 'flex',
        flex: 1,
        width: 10,
        height: 10,
        alignItems: 'center',
    },
    postIcon: {
        color: '#3AAED8',
        marginLeft: 10,
        justifyContent: 'center',
    },
    titleContainer: {
        width: 430,
        display: 'flex',
        flexDirection: 'row',
    },
    profileContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    titleText: {
        flex: 1,
        flexShrink: 1,
        fontSize: 18,
        width: 100,
    },
    backArrow: {
        marginLeft: 10,
        marginTop: 10,
    },
});

export default Listing;
