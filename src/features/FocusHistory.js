import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  
  const renderItem = ({ item }) => <Text style={styles.item}>✅ {item}</Text>;

  return (
    <View style={styles.container}>
      { (!history || !history.length) 
      ? <Text style={styles.item}>No focus items yet</Text>
      : <><Text style={styles.title}>Items I focused on</Text><FlatList data={history} renderItem={renderItem} /></>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,


  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingBottom: 2,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingBottom: spacing.sm
  },
});
