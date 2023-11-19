import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Flag from './Flag';

export default props => {
    return (
        <View style={style.container}>
            <View style={style.flagContainer}>
                <TouchableOpacity
                    onPress={props.onFlagPress}
                    style={style.flagButton}
                >
                    <Flag bigger />
                </TouchableOpacity>
            <Text style={style.flagsLeft}>= {props.flagsLeft}</Text>
        </View>
        <TouchableOpacity
            style={style.button}
            onPress={props.onNewGame}
        >
            <Text style={style.buttonLabel}>Novo Jogo</Text>
        </TouchableOpacity>
    </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20 
    },
    button: {
        backgroundColor: '#666',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    },
});