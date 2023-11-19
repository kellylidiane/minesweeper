import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [style.field];
    if (opened) styleField.push(style.opened);
    if (exploded) styleField.push(style.exploded);
    if (flagged) styleField.push(style.flagged);
    if (!opened && !exploded) styleField.push(style.regular);

    let color = null;

    if (nearMines > 0) {
        switch (nearMines) {
            case 1:
                color = '#0007e0';
                break;
            case 2:
                color = '#00991f';
                break;
            case 3:
                color = '#F9060A';
                break;
            case 4:
                color = '#000485';
                break;
            case 5:
                color = '#8f0000';
                break;
            case 6:
                color = '#007375';
                break;
            case 7:
                color = '#000';
                break;
            default:
                color = '#474747';
                break;
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? 
                    <Text style={[style.label, {color}]}>
                        {nearMines}
                    </Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#a3a3a3',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#a3a3a3',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    flagged: {

    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
})