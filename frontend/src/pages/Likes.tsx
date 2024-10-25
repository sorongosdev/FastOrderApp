import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/** Style */
import styles from '../styles/Likes';
/** Components */
import AppbarLikes from '../components/AppbarLikes';
/** Packages */
import {ScrollView} from 'react-native-gesture-handler';
import LikesStoreHeader from '../components/LikesStoreHeader';
import LikesListItem from '../components/LikesListItem';

export default function Likes(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AppbarLikes />
      <View style={[styles.divider, {height: 2}]}></View>
      <View style={styles.editWrapper}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>편집</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentContainer}>
        <LikesStoreHeader />
        <LikesListItem />
        <LikesListItem />
        <LikesListItem />
        <LikesListItem />
        <LikesStoreHeader />
        <LikesListItem />
        <LikesListItem />
        <LikesListItem />
        <LikesListItem />
      </ScrollView>
    </View>
  );
}
