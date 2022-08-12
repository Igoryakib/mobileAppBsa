import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Button, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getIsAuthenticated} from '../../redux/auth/auth-selectors';
import {getIsLoading} from '../../redux/selectors';
import {requestLoading} from '../../redux/actions';
import {loginUser, setData} from '../../redux/auth/auth-actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../components/Loader/Loader';
import Input from '../../components/Input/Input';
import {getError} from '../../redux/selectors';
import {useMutation} from '@apollo/client';
import {requestError} from '../../redux/actions';
import {LOGIN_USER} from '../../utils/mutation/auth';

import CustomButton from '../../components/Button/CustomButton';
import styles from './styles.js';

const LoginScreen = ({navigation}) => {
  const [login] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    dispatch(requestError(null));
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Main');
    }
  }, [isAuthenticated]);
  const onSubmit = () => {
    if (!email) {
      return Alert.alert('Warning', 'Email field is required');
    }
    if (!password) {
      return Alert.alert('Warning', 'Password field is required');
    }
    dispatch(requestLoading(true));
    login({
      variables: {
        input: {
          email,
          password,
        },
      },
    })
      .then(res => {
        setData(res.data.login);
        return dispatch(loginUser(res.data.login));
      })
      .catch(error => {
        console.log(error.message);
        return dispatch(requestError(error.message));
      })
      .finally(() => dispatch(requestLoading(false)));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.registerPage}>
          <Icon style={styles.icon} name="amazon" size={95} color="#fff" />
          <Text style={styles.subtitle}>Authorize</Text>
          <View style={styles.wrapperForm}>
            <Input
              value={email}
              onChange={target => setEmail(target.nativeEvent.text)}
              placeholder="Enter your email"
              keyboardType="email"
              autoComplete="email"
            />
            <Input
              value={password}
              onChange={target => setPassword(target.nativeEvent.text)}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <Button onPress={onSubmit} title="Login" style={styles.submitBtn} />
          <View style={styles.wrapperBtn}>
            <Text style={styles.text}>Haven`t you have account yet?</Text>
            <CustomButton
              text="Sign up"
              onClickFn={() => navigation.navigate('Register')}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
