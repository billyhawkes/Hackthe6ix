import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import Nav from '../components/Nav';
import {formStyles} from './Register';

const CreateListing = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <View>
            <View>
                <Nav />
                <Text>Title</Text>
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
                    name="title"
                    defaultValue=""
                />
                {errors.title && <Text>{errors.title.message}</Text>}
                <Text>Description</Text>
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
                    name="description"
                    defaultValue=""
                />
                {errors.description && (
                    <Text>{errors.description.message}</Text>
                )}
                <Text>Cost</Text>
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
                    name="cost"
                    defaultValue=""
                />
                {errors.cost && <Text>{errors.cost.message}</Text>}
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
};

export default CreateListing;
