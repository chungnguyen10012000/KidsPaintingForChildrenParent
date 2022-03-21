import { View } from "react-native";

export default function HandleLogin({ route, navigation }) {
    const { token } = route.params
    console.log(token)
    return (<View></View>)
    fetch("https://kidraw-keycloak.herokuapp.com/auth/realms/SpringBootKeycloak/protocol/openid-connect/userinfo", {
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((response) => response.text())
      .then((quote) => {
      })
      .done();
}