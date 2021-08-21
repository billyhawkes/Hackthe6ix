import React from 'react';
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
import {login} from '../helpers/auth';
import {buttonStyles, formStyles} from '../helpers/styles';

const Register = () => {
    const history = useHistory();
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
        <>
            <Button onPress={() => history.push('/')} title="Back" />
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
                            placeholder="email"
                        />
                    )}
                    name="email"
                    defaultValue=""
                />
                {errors.email && <Text>{errors.email.message}</Text>}
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
                            placeholder="password"
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                {errors.password && <Text>{errors.password.message}</Text>}
                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    style={buttonStyles.buttonFilled}>
                    <Text style={buttonStyles.buttonFilledText}>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Register;
