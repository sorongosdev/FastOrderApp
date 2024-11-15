import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
/** Icons */
import DetailIcon from '@assets/icon_details.svg';
import EmptyLikeIcon from '@assets/icon_empty_like.svg';
import FullLikeIcon from '@assets/icon_full_like.svg';
import CloseIcon from '@assets/icon_cancel.svg';
/** Styles */
import styles from '../styles/OrderListItem';
/** Props */
import {NavigationProp} from '../navigation/NavigationProps';

interface OrderListProp {
  date: string;
  progress: string;
  storeName: string;
  menuName: string;
  editButtonClicked: boolean;
}

interface CombinedInterface extends NavigationProp, OrderListProp {}

export default function OrderListItem({
  navigation,
  date,
  progress,
  storeName,
  menuName,
  editButtonClicked,
}: CombinedInterface): React.JSX.Element {
  const [likeChecked, setLikeChecked] = useState<boolean>(false);

  const navigateToPay = () => {
    navigation.navigate('Pay');
  };
  return (
    <View>
      <View style={styles.dateContainer}>
        <View style={styles.dateWrapper}>
          <Text>{date}</Text>
          <Text> • {progress}</Text>
        </View>
      </View>
      <View style={styles.historyContainer}>
        {/* left */}
        <View style={styles.storeImg}></View>
        {/* right */}
        <View style={styles.orderContainer}>
          <View style={styles.orderLeftWrapper}>
            <View style={styles.storeWrapper}>
              <Text style={styles.storeText}>{storeName}</Text>
              <View style={styles.detailIconBox}>
                <DetailIcon></DetailIcon>
              </View>
            </View>
            <Text style={styles.menuText}>{menuName}</Text>
          </View>
          <View style={styles.likeIconBox}>
            <View style={{display: editButtonClicked ? 'none' : 'flex'}}>
              {likeChecked ? (
                <TouchableOpacity onPress={() => setLikeChecked(false)}>
                  <FullLikeIcon />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setLikeChecked(true)}>
                  <EmptyLikeIcon />
                </TouchableOpacity>
              )}
            </View>
            <CloseIcon
              style={[
                styles.closeIcon,
                {display: editButtonClicked ? 'flex' : 'none'},
              ]}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.orderButton} onPress={navigateToPay}>
        <Text style={styles.orderText}>같은 메뉴 주문하기</Text>
      </TouchableOpacity>
    </View>
  );
}
