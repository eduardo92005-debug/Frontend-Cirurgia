import React from 'react';
import { StyleSheet, View, ScrollView, Button, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Perguntas from '../componentes/Perguntas';


export default class Tela_avaliacao extends React.Component {

    state = {
        flag_visual: true
    }

    static navigationOptions = {
        drawerLabel: 'Avaliação',
    };

    muda_flag = () => {
        this.setState({
            flag_visual: false
        })
    }

    salva_avaliacao = () => {
        this.setState({ flag_visual: true })
        this.props.navigation.navigate('Home');
    }

    render() {
        //const nome_paciente = this.props.navigation.getParam('paciente').name;
        //const cpf_paciente = this.props.navigation.getParam('paciente').cpf;

        return (
            <View key={1} style={{ flex: 1 }}>
                <Header
                    backgroundColor="red"
                    leftComponent={
                        <Icon
                            name='menu'
                            color='white'
                            onPress={() => this.props.navigation.openDrawer()}
                        />}
                    rightComponent={
                        <Button color="#8B0000" title="VOLTAR" onPress={() => this.props.navigation.goBack()} />
                    }
                    centerComponent={
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'white' }}>Avaliação</Text>
                    }
                />
                <ScrollView>
                    <Perguntas />
                    <View>
                        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 15, paddingBottom: 5 }}>
                            <Button color='red' title='SALVAR' onPress={this.salva_avaliacao} disabled={true} />
                        </View>
                        <View style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 15 }}>
                            <Button color='red' title='VOLTAR' onPress={this.salva_avaliacao} />
                        </View>
                    </View>
                </ScrollView>
            </View>
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
