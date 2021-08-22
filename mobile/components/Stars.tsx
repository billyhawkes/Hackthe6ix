import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
    starCount: number;
}

const Stars = ({starCount}: Props) => {
    return (
        <View style={styles.stars}>
            <Icon
                name={starCount >= 1 ? 'star' : 'staro'}
                size={30}
                color="#fcba03"
            />
            <Icon
                name={starCount >= 2 ? 'star' : 'staro'}
                size={30}
                color="#fcba03"
            />
            <Icon
                name={starCount >= 3 ? 'star' : 'staro'}
                size={30}
                color="#fcba03"
            />
            <Icon
                name={starCount >= 4 ? 'star' : 'staro'}
                size={30}
                color="#fcba03"
            />
            <Icon
                name={starCount >= 5 ? 'star' : 'staro'}
                size={30}
                color="#fcba03"
            />
        </View>
    );
};

export const styles = StyleSheet.create({
    stars: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: 150,
        height: 50,
    },
});

export default Stars;
