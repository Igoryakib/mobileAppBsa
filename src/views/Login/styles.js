import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  registerPage: {
    padding: 20,
    flex: 1,
    marginTop: 150,
    marginHorizontal: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontFamily: 'Ubuntu-Bold',
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#fff',
  },
  subtitle: {
    fontSize: 21,
    fontFamily: 'RobotoMono-Normal',
    fontWeight: 'normal',
    marginBottom: 20,
    color: '#c8c5c6',
  },
  errorMessage: {
    fontSize: 15,
    fontFamily: 'RobotoMono-Normal',
    fontWeight: 'normal',
    marginBottom: 16,
    color: 'red',
  },
  wrapperForm: {
    width: '85%',
    height: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: '100%',
  },
  submitBtn: {
    paddingHorizontal: 38,
    paddingVertical: 15,
    fontFamily: 'RobotoMono-Normal',
    fontWeight: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 70,
    height: 25,
    fontSize: 25,
  },
  wrapperBtn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
    marginTop: 14,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'RobotoMono-Normal',
    color: '#c8c5c6',
  },
  icon: {
    marginBottom: 28,
  },
});

export default styles;