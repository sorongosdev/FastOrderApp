import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
/** Style */
import styles from '../styles/Likes';
/** Components */
import AppbarLikes from '../components/AppbarLikes';
import LikesListItem from '../components/LikesListItem';
/** Packages */
import {ScrollView} from 'react-native-gesture-handler';
import LikesStoreHeader from '../components/LikesStoreHeader';
/** Props */
import {NavigationProp} from '../navigation/NavigationProps';

export default function Likes({navigation}: NavigationProp): React.JSX.Element {
  const [editButton, setEditButton] = useState([false]);

  const toggleEditButton = (index: number) => {
    const newEditButton = editButton;
    editButton[index] = !editButton[index];
    setEditButton(newEditButton);
    console.log('edit button pressed', index);
  };

  return (
    <View style={styles.container}>
      <AppbarLikes navigation={navigation} />
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
