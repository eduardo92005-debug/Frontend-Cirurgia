import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class Tela_login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  getHandler = key => val => {
    this.setState({ [key]: val });
  };

  cadastrar = () => {
    this.props.navigation.navigate("Cadastro");
  };

  login = () => {
    this.props.navigation.navigate("Main");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 200, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{ width: 150, height: 150, borderRadius: 80, backgroundColor: 'red' }}
            source={require('./assets/enferm.jpg')}
          />
      </View>
        <View style={{ paddingLeft: 50, paddingRight: 50 }}>
          <TextInput
            label='Nome de usuário'
            value={this.state.username}
            onChangeText={this.getHandler('username')}
          />
          <TextInput
            label='Senha'
            value={this.state.password}
            onChangeText={this.getHandler('password')}
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>
        <View style={{ alignItems: 'flex-end', paddingLeft: 50, paddingRight: 50, paddingTop: 8 }}>
          <TouchableOpacity onPress={this.cadastrar}>
            <Text style={{ color: 'green' }}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 25 }}>
          <Button title='Login' color='lightblue' onPress={this.login} />
        </View>

        <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 8 }}>
          <TouchableOpacity onPress={this.cadastrar}>
            <Text style={{ color: 'gray' }}>Não possui conta?</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
