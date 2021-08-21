import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Link, useHistory} from 'react-router-native';
import {register} from '../helpers/auth';
import {buttonStyles, formStyles} from '../helpers/styles';
import DateField from 'react-native-datefield';

const Register = () => {
    const [type, setType] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [error, setError] = useState(false);
    const history = useHistory();

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        register(data.append(birthDate));
        if (type === 'helper') history.push('/feed');
        if (type === 'client') history.push('/listing/create');
    };

    return (
        <View>
            <Button onPress={() => history.push('/')} title="Back" />
            {type === '' ? (
                <View style={formStyles.container}>
                    <Text style={styles.text}>Are you</Text>
                    <Link to="/register/client">
                        <TouchableOpacity
                            onPress={() => setType('client')}
                            style={buttonStyles.buttonFilled}>
                            <Text style={buttonStyles.buttonFilledText}>
                                In need of help
                            </Text>
                        </TouchableOpacity>
                    </Link>
                    <Text style={styles.text}>or</Text>
                    <Link to="/register/helper">
                        <TouchableOpacity
                            style={buttonStyles.buttonFilled}
                            onPress={() => setType('helper')}>
                            <Text style={buttonStyles.buttonFilledText}>
                                Looking to work
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            ) : (
                <View style={formStyles.container}>
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required',
                            },
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="first name"
                            />
                        )}
                        name="firstName"
                        defaultValue=""
                    />
                    {errors.firstName && (
                        <Text>{errors.firstName.message}</Text>
                    )}
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required',
                            },
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="last name"
                            />
                        )}
                        name="lastName"
                        defaultValue=""
                    />
                    {errors.lastName && <Text>{errors.lastName.message}</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required',
                            },
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="email"
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && <Text>{errors.email.message}</Text>}
                    <View style={formStyles.input}>
                        <Text style={styles.dateText}>birthdate</Text>
                        <DateField
                            containerStyle={styles.dateInput}
                            labelDate="DD"
                            labelMonth="MM"
                            labelYear="YYYY"
                            onSubmit={(value: any) => {
                                if (
                                    new Date().getFullYear() -
                                        value.getFullYear() <
                                    13
                                ) {
                                    setError(true);
                                } else {
                                    setError(false);
                                    setBirthDate(value);
                                }
                            }}
                        />
                    </View>

                    {error && <Text>You must be at least 13 years old</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required',
                            },
                            minLength: {
                                value: 8,
                                message:
                                    'Password must have at least 8 characters',
                            },
                            maxLength: 100,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                secureTextEntry={true}
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="password"
                            />
                        )}
                        name="password"
                        defaultValue=""
                    />
                    {errors.password && <Text>{errors.password.message}</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: 'Field is required',
                            },
                            minLength: 8,
                            maxLength: 100,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                secureTextEntry={true}
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="repeat password"
                            />
                        )}
                        name="passwordCheck"
                        defaultValue=""
                    />
                    {errors.passwordCheck && (
                        <Text>{errors.password.message}</Text>
                    )}
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={buttonStyles.buttonFilled}>
                        <Text style={buttonStyles.buttonFilledText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 40,
    },
    dateInput: {
        width: 100,
    },
    dateText: {
        color: '#aaa',
        fontSize: 16,
    },
});

export default Register;
