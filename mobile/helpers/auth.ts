import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface registerBody {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordCheck: string;
}
export const register = async (registerBody: registerBody) => {
    // if (registerBody.password !== registerBody.passwordCheck) {
    //     try {
    //         const res = await axios.post('/register', registerBody);
    //         const data = await res.data;
    //         await AsyncStorage.setItem('user_id', data.user_id);
    //     } catch (err) {
    //         console.log('Register error');
    //     }
    // }
};

interface loginBody {
    email: string;
    password: string;
}
export const login = async (loginBody: loginBody) => {
    try {
        const res = await axios.post('/login', loginBody);
        const data = await res.data;
        await AsyncStorage.setItem('user_id', data.user_id);
    } catch (err) {
        console.log('Login error');
    }
};

export const getProfile = async () => {
    // const userId = await getUserId();
    // if (userId) {
    //     const res = await axios.get('/profile', {headers: {user_id: userId}});
    //     const data = res.data;
    //     return data;
    // }
    return {
        stars: 3,
        name: 'Billy Hawkes',
        bio: 'lorem afdf afd d fa faf add afaf ',
    };
};

export const getUserId = async () => {
    try {
        const userId = await AsyncStorage.getItem('user_id');
        if (userId !== null) {
            return userId;
        }
    } catch (err) {
        console.log('Error getting userId');
        throw err;
    }
};
