import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Header, Icon, } from 'react-native-elements';


export default class Tela_Principal extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Principal',
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    backgroundColor="blue"
                    leftComponent={
                        <Icon
                            name='menu'
                            color='white'
                            onPress={() => this.props.navigation.openDrawer()}
                        />}
                    rightComponent={
                        <Icon
                        name='close'
                        color='white'
                        onPress={() => this.props.navigation.navigate('Login')}
                    />}
                    centerComponent={
                        <Text style={styles.text}>Menu Principal</Text>
                    }
                />
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <View style={styles.button}>
                        <Button title='CADASTRAR PROCEDIMENTO' color='blue' onPress={() => { this.props.navigation.navigate('Cadastrar') }} />
                    </View>

                    <View style={styles.button}>
                        <Button title='BUSCAR PROCEDIMENTO' color='blue' onPress={() => {}} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        paddingLeft: 20, 
        paddingRight: 20, 
        paddingTop: 50,
    },
    text: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 18, 
        color: 'white',
    }
  });
