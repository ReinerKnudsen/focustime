import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    // from the Countdown component we receive "reset" as return value
    setIsStarted(false);
    setProgress(1);
    reset(); // we can use the function here
    onTimerEnd(focusSubject)
    Vibration.vibrate(PATTERN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress} // this equals: (progress) => {setProgress(progress); progress coming from the component
          onEnd={onEnd}
        />
        <View style={styles.subjectWrapper}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          color={colors.lightBlue}
          size={{ height: spacing.sm }}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing minutes={5} onTimeChange={setMinutes} />
        <Timing minutes={10} onTimeChange={setMinutes} />
        <Timing minutes={20} onTimeChange={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          mode="outlined"
          color={colors.white}
          style={styles.clearButton}
          onPress={clearSubject}>
          Reset
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectWrapper: {
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: spacing.lg,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: spacing.md,
  },
  progressBarContainer: {
    padding: spacing.md,
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    padding: spacing.lg,
  },
  clearButton: {
    width: 180,
    height: 50,
    borderColor: colors.white,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
