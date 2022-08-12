import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  detailPage: {
    padding: 20,
    flex: 1,
    marginHorizontal: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  detailImg: {
    marginBottom: 17,
    width: 230,
    height: 230,
  },
  slider: {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperText: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 23,
    fontFamily: 'Ubuntu-Bolt',
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 17,
    fontFamily: 'RobotoMono-Normal',
    fontWeight: 'normal',
    color: '#fff',
    marginBottom: 23,
  },
  sellerInfo: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    marginRight: '50%',
    marginBottom: 15,
  },
  wrapperSellerInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 18,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  sellerTexts: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellerTitle: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Bolt',
    fontWeight: 'bold',
    color: '#fff',
  },
  sellerNumber: {
    fontSize: 15,
    fontFamily: 'RobotoMono-Normal',
    fontWeight: 'normal',
    color: '#fff',
  },
  callButton: {
    width: 178,
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteBtn: {
    width: '100%',
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  deleteBtnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  deleteBtnText: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Bolt',
    fontWeight: 'bold',
    color: 'red',
  },
});

export {styles};