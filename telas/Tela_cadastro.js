import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Button } from 'react-native';
import { TextInput } from 'react-native-paper';


export default class Tela_cadastro extends React.Component {

    state = {
        nome: '',
        cpf: '',
        email: '',
        senha: '',
    }

    getHandler = key => val => {
        this.setState({ [key]: val });
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#2F4F4F' }}>
                

                <KeyboardAvoidingView behavior="padding" enabled>
                    <View style={{ paddingLeft: 50, paddingRight: 50 }}>
                        <TextInput
                            label='Nome completo'
                            value={this.state.nome}
                            onChangeText={this.getHandler('nome')}
                        />

                        <TextInput
                            label='Senha'
                            value={this.state.senha}
                            onChangeText={this.getHandler('senha')}
                            keyboardType="numeric"
                            secureTextEntry={true}
                        />

                        <TextInput
                            label='Email'
                            value={this.state.email}
                            onChangeText={this.getHandler('email')}
                        />

                        <TextInput
                            label='CPF'
                            value={this.state.cpf}
                            onChangeText={this.getHandler('cpf')}
                            keyboardType="numeric"
                        />

                        <View style={{  paddingBottom: 10, paddingTop: 30 }}>
                            <Button color="blue" title="CADASTRAR" onPress={() => this.props.navigation.navigate('Login')} />
                        </View>

                        <View style={{  paddingBottom: 30 }}>
                            <Button color="blue" title="CANCELAR" onPress={() => this.props.navigation.navigate('Login')} />
                        </View>
                    </View>
                </KeyboardAvoidingView>

            </View>

        );
    }
}