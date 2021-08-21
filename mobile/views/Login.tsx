import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Link} from 'react-router-native';
import {login} from '../helpers/auth';
import {formStyles} from './Register';

const Register = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        login(data);
        console.log(data);
    };

    return (
        <View>
            <Link to="/">
                <Text>Back</Text>
            </Link>
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
            {errors.email && <Text>This is required.</Text>}
            <Text>Password</Text>
            <Controller
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Field is required',
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
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};

export default Register;
