import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainPage: {
    padding: 20,
    flex: 1,
    marginHorizontal: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  wrapperControl: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  wrapperSearch: {
    width: '85%',
    position: 'relative',
  },
  iconSearch: {
    position: 'absolute',
    right: 6,
    top: 5,
  },
  wrapperBtnAdd: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
  },
  list: {
    width: '100%',
    marginBottom: 10,
  },
  loadMoreBtn: {
    color: '#000',
  },
  modalWrapper: {
    padding: 20,
    flex: 1,
  },
  modalTitle: {
    fontSize: 25,
    fontFamily: 'Ubuntu-Bolt',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  modalContent: {
    marginTop: 45,
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputModal: {
    borderColor: '#000',
    color: '#000',
  },
  wrapperForm: {
    width: '85%',
    height: 190,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
});

export {styles};