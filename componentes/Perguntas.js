import React from 'react';
import {View, Text, Flatlist, StyleSheet} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import { Instrumento } from './Instrumento_test';
export default class Perguntas extends React.Component {

    state = {
        resposta: '',
    }
    _keyExtractor = (item, index) => item.pergunta.id;
    _renderItem = ({item}) => (
        <View>
            <Card>
                <CardItem>
                    <Body>
                        <Text style={styles.text} >{item.pergunta.texto}</Text>
                    </Body>
                </CardItem>
            </Card>
            {(item.pergunta.tipo === 'MT') && (
                <View>
                    {item.alternativas.alternativa.map((l, i) => (<CheckListPerguntas key={l.id_alternativa} alternativa={l} tipo='MT'/>))}
                </View>    
            )}
            {(item.pergunta.tipo === 'OB')&& (
                <View>
                    {item.alternativas.alternativa.map((l, i) => (<CheckListPerguntas key={l.id_alternativa} alternativa={l} tipo='OB'/>))}
                </View>    
            )}
        </View>
    );
    render() {
        return(
            <View>
                <Flatlist data={Instrumento} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />
            </View>
        )
    } 

}

const styles = StyleSheet.create({
    text:{
        textAlign: 'justify',
        fontWeight: 'bold', 
        fontSize: 18
    }
});