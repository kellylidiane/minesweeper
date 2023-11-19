import React, { useState } from 'react';
import { Alert, Text, SafeAreaView, StyleSheet, View } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  invertFlag,
  usedFlags
} from './src/functions';

export default props => {
  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const initBoardState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return createMinedBoard(rows, cols, minesAmount());
  };

  const initialState = () => {
    setBoard(initBoardState());
    setWon(false);
    setLost(false);
    setShowLevelSelectionModal(false);
  };

  const [board, setBoard] = useState(initBoardState());
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelectionModal, setShowLevelSelectionModal] = useState(false);

  const onOpenField = (row, column) => {
    if (lost || won) {
      return;
    }

    const clonedBoard = cloneBoard(board);
    openField(clonedBoard, row, column);
    const lostThisGame = hasExplosion(clonedBoard);
    const wonThisGame = wonGame(clonedBoard);

    if (lostThisGame) {
      showMines(clonedBoard);
      Alert.alert('Perdeu!', 'vacilão');
    } else if (wonThisGame) {
      Alert.alert('Parabéns!', 'Não fez mais que sua obrigação');
    }

    setBoard(clonedBoard);
    setWon(wonThisGame);
    setLost(lostThisGame);
  };

  const onSelectField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    invertFlag(clonedBoard, row, column);
    const wonThisGame = wonGame(clonedBoard);
    if (wonThisGame) {
      Alert.alert('Parabéns!', 'Não fez mais que sua obrigação');
    }
    setBoard(clonedBoard);
    setWon(wonThisGame);
  };

  const onLevelSelected = level => {
    params.difficultLevel = level;
    initialState();
  };

  return (
    <SafeAreaView style={style.container}>
      <LevelSelection
        isVisible={showLevelSelectionModal}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelectionModal(false)}
      />
      <Header
        flagsLeft={minesAmount() - usedFlags(board)} 
        onNewGame={() => initialState()}
        onFlagPress={() => setShowLevelSelectionModal(true)}
      />
      <View style={style.board}>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
})