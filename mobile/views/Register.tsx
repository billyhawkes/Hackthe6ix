import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Link} from 'react-router-native';
import {register} from '../helpers/auth';

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data: any) => {
        register(data);
        console.log(data);
    };

    return (
        <View>
            <Link to="/">
                <Text>Back</Text>
            </Link>
            <Text>First Name</Text>
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
                    />
                )}
                name="firstName"
                defaultValue=""
            />
            {errors.firstName && <Text>{errors.firstName.message}</Text>}
            <Text>Last Name</Text>
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
                    />
                )}
                name="lastName"
                defaultValue=""
            />
            {errors.lastName && <Text>{errors.lastName.message}</Text>}
            <Text>Email</Text>
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
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.email && <Text>{errors.email.message}</Text>}
            <Text>Password</Text>
            <Controller
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Field is required',
                    },
                    minLength: {
                        value: 8,
                        message: 'Password must have at least 8 characters',
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
                    />
                )}
                name="password"
                defaultValue=""
            />
            {errors.password && <Text>{errors.password.message}</Text>}
            <Text>Password Check</Text>
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
                    />
                )}
                name="passwordCheck"
                defaultValue=""
            />
            {errors.passwordCheck && <Text>{errors.password.message}</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export const formStyles = StyleSheet.create({
    input: {
        color: 'black',
        borderColor: '#cccccc',
        borderWidth: 1,
    },
});

export default Register;
