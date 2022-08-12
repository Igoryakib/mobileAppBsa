/* eslint-disable no-undef */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const ProductItem = ({product, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailProductScreen', product.id)}>
      <View key={product.id} style={styles.card}>
        <Image
          style={styles.cardImg}
          source={
            product?.pictures[0]?.url
              ? {uri: product?.pictures[0]?.url}
              : require('../../static/notFoundImg.webp')
          }
        />
        <View style={styles.wrapperText}>
          <View style={styles.wrapperTitles}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>${product.price}</Text>
          </View>
          <Text numberOfLines={3} style={styles.description}>
            {product.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },
    cardImg: {
      width: 120,
      height: 120,
    },
    wrapperText: {
      width: 195,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'left',
    },
    wrapperTitles: {
      width: 193,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'flex-start',
      marginBottom: 20,
    },
    title: {
      fontSize: 16,
      fontFamily: 'Ubuntu-Bolt',
      fontWeight: 'bold',
      color: '#000',
    },
    description: {
      fontSize: 14,
      fontFamily: 'RobotoMono-Normal',
      fontWeight: 'normal',
      color: '#000',
      textAlign: 'left',
    },
  },
);

export default ProductItem;
