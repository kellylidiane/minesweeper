import React from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const LevelOption = props => (
    <TouchableOpacity
        style={[style.button, { backgroundColor: props.bgColor }]}
        onPress={props.onPress}
    >
        <Text style={style.buttonLabel}>{props.level}</Text>
    </TouchableOpacity>
);

export default props => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={style.frame}>
                <View style={style.container}>
                    <Text style={style.title}>Selecione o nível</Text>
                    <LevelOption
                        bgColor={'#49B65D'}
                        onPress={() => props.onLevelSelected(0.1)}
                        level='Fácil'
                    />
                    <LevelOption
                        bgColor={'#2765F7'}
                        onPress={() => props.onLevelSelected(0.2)}
                        level='Intermediário'
                    />
                    <LevelOption
                        bgColor={'#F26337'}
                        onPress={() => props.onLevelSelected(0.3)}
                        level='Difícil'
                    />
                </View>
            </View>
        </Modal>
    );
};

const style = StyleSheet.create({ 
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
});
