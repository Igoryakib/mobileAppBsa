import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Button,
  Modal,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getIsLoading} from '../../redux/selectors';
import {getProducts} from '../../redux/products/products-selectors';
import {getFilter} from '../../redux/products/products-selectors';
import {productsFilter} from '../../redux/products/products-actions';
import Loader from '../../components/Loader/Loader';
import Input from '../../components/Input/Input';
import ProductItem from '../../components/ProductItem/ProductItem';
import {styles} from './styles';
import {useQuery, useMutation} from '@apollo/client';
import {requestError} from '../../redux/actions';
import {GET_ALL_PRODUCTS} from '../../utils/query/products';
import {requestLoading} from '../../redux/actions';
import {getAllProducts, addProduct} from '../../redux/products/products-actions';
import { CREATE_PRODUCT } from '../../utils/mutation/products';

const MainScreen = ({navigation}) => {
  const {data, loading, error} = useQuery(GET_ALL_PRODUCTS);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoading);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    dispatch(requestLoading(true));
    if (!loading) {
      dispatch(requestLoading(false));
      dispatch(getAllProducts(data.products.nodes));
    }
    if (error) {
      dispatch(requestLoading(false));
      dispatch(requestError(error.message));
    }
  }, [data]);
  const onSubmit = () => {
        dispatch(requestLoading(true));
        createProduct({
          variables: {
            input: {
              title,
              price: +price,
              description,
            },
          },
        })
          .then(res => {
            return dispatch(addProduct(res.data.createProduct));
          })
          .catch(error => {
            console.log(error.message);
            return dispatch(requestError(error.message));
          })
          .finally(() => dispatch(requestLoading(false)));
    setTitle('');
    setPrice('');
    setDescription('');
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView style={styles.mainPage}>
          <Modal visible={isOpen}>
            <View style={styles.modalWrapper}>
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                <Icon size={40} name="close" color="#000" />
              </TouchableOpacity>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Create your product</Text>
                <View style={styles.wrapperForm}>
                  <Input
                    style={styles.inputModal}
                    placeholder="Enter title"
                    value={title}
                    onChange={target => setTitle(target.nativeEvent.text)}
                    placeholderTextColor="#000"
                  />
                  <Input
                    style={styles.inputModal}
                    value={price}
                    onChange={target => setPrice(target.nativeEvent.text)}
                    placeholder="Enter price $"
                    keyboardType="numeric"
                    placeholderTextColor="#000"
                  />
                  <Input
                    style={styles.inputModal}
                    value={description}
                    onChange={target => setDescription(target.nativeEvent.text)}
                    placeholder="Enter description"
                    placeholderTextColor="#000"
                  />
                </View>
                <Button onPress={onSubmit} title="Create product" />
              </View>
            </View>
          </Modal>
          <View style={styles.wrapperControl}>
            <View style={styles.wrapperSearch}>
              <Input
                onChange={target =>
                  dispatch(productsFilter(target.nativeEvent.text))
                }
                value={filter}
                placeholder="Search"
              />
              <Icon
                style={styles.iconSearch}
                name="search"
                size={35}
                color="#fff"
              />
            </View>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              <View style={styles.wrapperBtnAdd}>
                <Icon
                  color="#fff"
                  style={styles.buttonAdd}
                  size={30}
                  name="plus"
                />
              </View>
            </TouchableOpacity>
          </View>
          {isLoading ? (
            <Loader />
          ) : (
            <FlatList
              style={styles.list}
              data={products}
              renderItem={({item}) => (
                <ProductItem navigation={navigation} product={item} />
              )}
            />
          )}
        </SafeAreaView>
      )}
    </>
  );
};

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MainScreen;
