import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';


const Procedimentos = [
    {
        ID:'12545',
        RISCO:'Alto'
    },
    {
        ID:'5262',
        RISCO:'Baixo'
    }
]

export default class Tela_busca extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Principal',
    };
    state = {
        name: '',
        search: '',
        id:''
    }
    procuraProcedimento = search => {
        this.state({search})
    }
    selecionaProcedimento = id => {

    }
    render(){
        const { search } = this.state;
        return(
            <View style={{flex:1}}>
                <Header
                backgroundColor='#3299FB'
                leftComponent=
                {
                    <Icon
                    name='menu'
                    color='white'
                    onPress={()=> this.props.navigation.openDrawer()}/>        
                }
                rightComponent=
                {
                    <Icon
                    name='close'
                    color='white'
                    onPress={()=>this.props.navigation.navigate('Main')}/>
                }
                centerComponent={
                <Text style={{color:'white', fontSize:18}}>Buscar Procedimento</Text>
                }
                >
                </Header>

                <View style={{paddingLeft:15,paddingRight:20, paddingTop:10}}>
                    <View>
                        <Searchbar
                        inputStyle={{backgroundColor: 'white'}}
                        containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
                        placeholderTextColor={'#g5g5g5'}
                        placeholder='Buscar por procedimento...'
                        onChangeText={this.procuraProcedimento}
                        value={search}>
                        </Searchbar>
                    </View>
                </View>

                <View style={{paddingLeft:15, paddingTop:10}}>
                    <Text style={{color:'grey',fontWeight:'bold', fontSize:15}}>Escolha um procedimento para avaliar</Text>
                </View>

            
                <ScrollView>
                    <View style={{paddingBottom:10}}>
                        <Card title = "Procedimentos registrados">
                            {
                                Procedimentos.map((u,i) => {
                                    return(
                                        <View key={i}>
                                            <Text>{u.ID}</Text>
                                            <Text>{u.RISCO}</Text>
                                        </View>
                                    )
                                })
                            }
                        </Card>
                    </View>
                </ScrollView>
            </View>
        )
    }
}