/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Image, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoading} from '../../redux/selectors';
import {getUserEmail} from '../../redux/auth/auth-selectors';
import {requestError} from '../../redux/actions';
import {requestLoading} from '../../redux/actions';
import {useQuery, useMutation} from '@apollo/client';
import {GET_PRODUCT} from '../../utils/query/products';
import {DELETE_PRODUCT} from '../../utils/mutation/products';
import {removeProduct} from '../../redux/products/products-actions';
import Loader from '../../components/Loader/Loader';
import call from 'react-native-phone-call';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetailScreen = ({route, navigation}) => {
  const {data, loading, error} = useQuery(GET_PRODUCT, {
    variables: {id: +route.params},
  });
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const userEmail = useSelector(getUserEmail);
  const [product, setProduct] = useState({});
  const [index, setIndex] = useState(0);
  useEffect(() => {
    dispatch(requestLoading(true));
    if (!loading) {
      dispatch(requestLoading(false));
      setProduct(data.product);
    }
    if (error) {
      dispatch(requestLoading(false));
      dispatch(requestError(error.message));
    }
  }, [data]);
  const onCall = phoneNumber => {
    const args = {
      number: phoneNumber, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };
    call(args).catch(console.error);
  };
  const increaseIndex = () => {
    if (index === product.pictures.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };
  const decreaseIndex = () => {
    if (index === 0) {
      return setIndex(product.pictures.length - 1);
    }
    return setIndex(index - 1);
  };
  const onDelete = productId => {
    dispatch(requestLoading(true));
    deleteProduct({
      variables: {
        id: +productId
      },
    })
      .then(res => {
        console.log(res.data);
        return dispatch(removeProduct(+productId));
      })
      .catch(error => {
        console.log(error.message);
        return dispatch(requestError(error.message));
      })
      .finally(() => dispatch(requestLoading(false)));
    navigation.navigate('Main');
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.detailPage}>
          <View style={styles.slider}>
            <TouchableOpacity onPress={decreaseIndex}>
              <Icon size={46} color="#fff" name="arrow-left" />
            </TouchableOpacity>
            <Image
              style={styles.detailImg}
              source={
                product.pictures
                  ? {uri: product?.pictures && product.pictures[index]?.url}
                  : require('../../static/notFoundImg.webp')
              }
            />
            <TouchableOpacity onPress={increaseIndex}>
              <Icon size={46} color="#fff" name="arrow-right" />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>${product.price}</Text>
          </View>
          <Text style={styles.description}>{product.description}</Text>
          {product.seller && (
            <View style={styles.sellerInfo}>
              <View style={styles.wrapperSellerInfo}>
                <Image
                  style={styles.avatar}
                  source={
                    product.seller.avatar
                      ? {uri: product.seller.avatar}
                      : require('../../static/defaultAvatar.png')
                  }
                />
                <View style={styles.sellerTexts}>
                  <Text style={styles.sellerTitle}>{product.seller.name}</Text>
                  <Text style={styles.sellerNumber}>
                    {product.seller.phoneNumber}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => onCall(product.seller.phoneNumber)}>
                <View style={styles.callButton}>
                  <Text style={styles.sellerTitle}>Call Seller</Text>
                  <Icon color="#fff" name="phone" size={38} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {userEmail === product?.seller?.email && (
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => onDelete(product.id)}>
              <View style={styles.deleteBtnWrapper}>
                <Text style={styles.deleteBtnText}>Delete product</Text>
                <Icon size={45} name="delete" color="red" />
              </View>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      )}
    </>
  );
};

ProductDetailScreen.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ProductDetailScreen;
