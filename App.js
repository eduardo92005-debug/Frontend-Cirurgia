import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Image } from 'react-native';

import Tela_login from './telas/Tela_login';
import Tela_principal from './telas/Tela_principal';
import Tela_cadastro from './telas/Tela_cadastro';
import Tela_Instrumento from './telas/Tela_Instrumento';
import Tela_busca from './telas/Tela_busca';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";



const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingTop: 50}}>
    </View>
    <View style={{paddingTop: 40}} />
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Tela_principal,
  },
  Instrumento:{
    screen : Tela_Instrumento,
  }
}, { contentComponent: CustomDrawerComponent })

const AppNavigator = createSwitchNavigator(
  {
    Login: Tela_login,
    Cadastro: Tela_cadastro,
    Main: DrawerNavigator,
    Busca: Tela_busca
  },
  {
    initialRouteName: 'Busca'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
