import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onTimeChange, minutes }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton size={75} title={minutes} onPress={() => onTimeChange(minutes)} />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
