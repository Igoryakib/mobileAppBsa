import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getIsRegistered} from '../../redux/auth/auth-selectors';
import {getIsLoading} from '../../redux/selectors';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/Button/CustomButton';
import Loader from '../../components/Loader/Loader';
import Input from '../../components/Input/Input';
import styles from './styles';
import {getError} from '../../redux/selectors';
import {requestError} from '../../redux/actions';
import { requestLoading } from '../../redux/actions';
import {useMutation} from '@apollo/client';
import {REGISTER_USER} from '../../utils/mutation/auth';
import {registerUser} from '../../redux/auth/auth-actions';

const RegisterScreen = ({navigation}) => {
  const [register] = useMutation(REGISTER_USER);
  const dispatch = useDispatch();
  const isRegistered = useSelector(getIsRegistered);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    if (isRegistered) {
      navigation.navigate('Login');
    }
  }, [isRegistered]);
  useEffect(() => {
    dispatch(requestError(null));
  }, []);
  const onSubmit = () => {
    if (!name) {
      return Alert.alert('Warning', 'Name field is required');
    }
    if (!email) {
      return Alert.alert('Warning', 'Email field is required');
    }
    if (!password) {
      return Alert.alert('Warning', 'Password field is required');
    }
    if (!phoneNumber) {
      return Alert.alert('Warning', 'Number field is required');
    }
    dispatch(requestLoading(true));
    register({
      variables: {
        input: {
          email,
          name,
          phoneNumber,
          password,
        },
      },
    })
      .then(res => {
        return dispatch(registerUser(res.data.register));
      })
      .catch(error => {
        console.log(error.message);
        return dispatch(requestError(error.message));
      })
      .finally(() => dispatch(requestLoading(false)));
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.registerPage}>
          <Icon style={styles.icon} name="amazon" size={95} color="#fff" />
          <Text style={styles.subtitle}>Register your profile</Text>
          <View style={styles.wrapperForm}>
            <Input
              value={name}
              onChange={target => setName(target.nativeEvent.text)}
              placeholder="Enter your name"
              autoComplete="name"
            />
            <Input
              value={email}
              onChange={target => setEmail(target.nativeEvent.text)}
              placeholder="Enter your email"
              autoComplete="email"
              keyboardType="email"
            />
            <Input
              value={password}
              onChange={target => setPassword(target.nativeEvent.text)}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
            <Input
              value={phoneNumber}
              onChange={target => setPhoneNumber(target.nativeEvent.text)}
              placeholder="Enter your number"
              keyboardType="numeric"
            />
          </View>
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <Button
            onPress={onSubmit}
            title="Register"
            style={styles.submitBtn}
          />
          <View style={styles.wrapperBtn}>
            <Text style={styles.text}>Have you already have account?</Text>
            <CustomButton
              text="Sign In"
              onClickFn={() => navigation.navigate('Login')}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

RegisterScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterScreen;
