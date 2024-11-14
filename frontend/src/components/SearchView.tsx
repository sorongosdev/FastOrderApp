import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
/** Styles */
import styles from '../styles/SearchView';

export default function SearchView() {
  return (
    <View style={styles.container}>
      <Text style={styles.recentTitle}>최근 검색어</Text>
      <View style={styles.chipGroup}>
        <TouchableOpacity style={styles.chipBox}>
          <Text>마라미방</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chipBox}>
          <Text>마라미방</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chipBox}>
          <Text>마라미방</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chipBox}>
          <Text>마라미방</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
