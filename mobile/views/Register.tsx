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
import {Link, Route, useHistory} from 'react-router-native';
import {register} from '../helpers/auth';
import {buttonStyles, formStyles} from '../helpers/styles';
import DateField from 'react-native-datefield';
import CheckBox from '@react-native-community/checkbox';
import Terms from './Terms';

const Register = () => {
    const [type, setType] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [error, setError] = useState(false);
    const [termsCheckBox, setTermsCheckBox] = useState(false);
    const [promoCheckBox, setPromoCheckBox] = useState(false);
    const history = useHistory();

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        data = {...data, birthDate: birthDate.toString()};
        register(data)
            .then(() => {
                if (type === 'helper') history.push('/feed');
                if (type === 'client') history.push('/listing/create');
            })
            .catch(() => console.log('Error'));
    };

    return (
        <View>
            <Route path="/register/start">
                <Button onPress={() => history.push('/')} title="Back" />
                <View style={formStyles.container}>
                    <Text style={styles.text}>Are you</Text>
                    <Link to="/register/client">
                        <TouchableOpacity
                            onPress={() => {
                                setType('client');
                                history.push('/register/form');
                            }}
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
                            onPress={() => {
                                setType('helper');
                                history.push('/register/form');
                            }}>
                            <Text style={buttonStyles.buttonFilledText}>
                                Looking to work
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </Route>
            <Route path="/register/form">
                <Button
                    onPress={() => history.push('/register/start')}
                    title="Back"
                />
                <View style={formStyles.container}>
                    <Text style={formStyles.title}>Register</Text>
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
                    <View style={styles.checkBox}>
                        <CheckBox
                            disabled={false}
                            value={termsCheckBox}
                            onValueChange={newValue =>
                                setTermsCheckBox(newValue)
                            }
                        />
                        <View style={styles.view}>
                            <Text>I confirm i have read the </Text>
                            <Text
                                style={styles.link}
                                onPress={() => history.push('/register/terms')}>
                                terms and conditions
                            </Text>
                            <Text> and am at least 13 years of age</Text>
                        </View>
                    </View>
                    <View style={styles.checkBox}>
                        <CheckBox
                            disabled={false}
                            value={promoCheckBox}
                            onValueChange={newValue =>
                                setPromoCheckBox(newValue)
                            }
                        />
                        <Text>
                            I agree to receive promotional content and e-mails
                            from helping hands
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={handleSubmit(onSubmit)}
                        style={buttonStyles.buttonFilled}>
                        <Text style={buttonStyles.buttonFilledText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </Route>
            <Route path="/register/terms">
                <Terms />
            </Route>
        </View>
    );
};

export const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginTop: 40,
        color: '#aaa',
    },
    link: {
        color: 'blue',
    },
    dateInput: {
        width: 100,
    },
    dateText: {
        color: '#aaa',
        fontSize: 16,
    },
    checkBox: {
        display: 'flex',
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    view: {
        width: 300,
        flexShrink: 1,
    },
});

export default Register;
