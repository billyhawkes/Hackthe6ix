import {StyleSheet} from 'react-native';

export const buttonStyles = StyleSheet.create({
    buttonFilled: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 40,
        textAlign: 'center',
        backgroundColor: '#3AAED8',
        borderRadius: 20,
    },
    buttonFilledText: {
        color: '#F2F2F2',
        fontWeight: 'bold',
    },
    buttonHollowed: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#3AAED8',
        width: 230,
        height: 40,
        textAlign: 'center',
        backgroundColor: '#F2F2F2',
        borderStyle: 'solid',
        borderColor: '#3AAED8',
        borderWidth: 3,
        borderRadius: 20,
    },
    buttonHollowedText: {
        color: '#3AAED8',
        fontWeight: 'bold',
    },
});

export const formStyles = StyleSheet.create({
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'black',
        borderColor: '#cccccc',
        borderWidth: 1,
        width: 250,
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#aaa',
        marginTop: 20,
    },
});
