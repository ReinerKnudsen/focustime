import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <View>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history} />
        </View>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {setHistory([...history, subject])}}
          clearSubject={() => {setCurrentSubject(null)}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.myBlue,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
