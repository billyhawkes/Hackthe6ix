import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Nav from '../components/Nav';
import {buttonStyles, formStyles} from '../helpers/styles';

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
        <>
            <View>
                <View style={formStyles.container}>
                    <Text style={formStyles.title}>New Posting</Text>
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
                                placeholder="title"
                            />
                        )}
                        name="title"
                        defaultValue=""
                    />
                    {errors.title && <Text>{errors.title.message}</Text>}
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
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="description"
                            />
                        )}
                        name="description"
                        defaultValue=""
                    />
                    {errors.description && (
                        <Text>{errors.description.message}</Text>
                    )}
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
                                style={formStyles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="cost"
                            />
                        )}
                        name="cost"
                        defaultValue=""
                    />
                    {errors.cost && <Text>{errors.cost.message}</Text>}
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={buttonStyles.buttonFilled}>
                        <Text style={buttonStyles.buttonFilledText}>
                            Create
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Nav />
        </>
    );
};

export default CreateListing;
