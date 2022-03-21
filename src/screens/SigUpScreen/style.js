const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#FFEDDA'
  },
  loginScreenContainer: {
    flex: 1,
  },
  loginForgotPassword: {
    flex: 2,
    alignContent: 'center',
    alignItems: 'center'
  },
  sigup: {
    textAlign: 'center',
    marginTop: 30
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
    color: '#000000'
  },
  loginFormView: {
    flex: 6,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  forgot: {
    color: '#3DB2FF',
    textAlign: 'center',
    marginTop: 10
  },
  link: {
    color: '#3DB2FF',
    textAlign: 'center'
  }
});
export default styles;