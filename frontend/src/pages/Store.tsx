import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  View, 
  Text, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps'; 
import EmptyLike from '../assets/icon_empty_like.svg';
import FullLike from '../assets/icon_full_like.svg';
import Location from '../assets/icon_location.svg';
import Clock from '../assets/icon_clock.svg';
import Phone from '../assets/icon_phone.svg';
import StoreImg from '../components/StoreImg';

import styles from '../styles/Store';

interface MenuItem {
  no: number;
  name: string;
  image: string | null; // 이미지가 null일 수도 있으므로
  price: number;
  description: string;
  min_quantity: number;
  max_quantity: number;
  is_soldout: number;
  store: number;
}

interface StoreInfo {
  business_days: string | null; // 영업일, null일 수 있음
  business_hours: string | null; // 영업시간, null일 수 있음
  description: string | null; // 설명, null일 수 있음
  location: string; // 위치
  logo: string | null; // 로고 이미지 URL, null일 수 있음
  no: number; // 가게 번호
  phone_number: string | null; // 전화번호, null일 수 있음
  ready_time12: string | null; // 1인분 준비 시간, null일 수 있음
  ready_time34: string | null; // 2인분-3인분 준비 시간, null일 수 있음
  seating_available: boolean | null; // 좌석 가능 여부, null일 수 있음
  store_name: string; // 가게 이름
  store_status: string | null; // 가게 상태, null일 수 있음
  store_type: string; // 가게 타입
}

const BASE_URL = "http://money.ipdisk.co.kr:58200/";

export default function Store({ navigation }: NavigationProp): React.JSX.Element {
  const [isFastOrderOn, setIsFastOrderOn] = useState<boolean>(true);
  const [likeChecked, setLikeChecked] = useState<boolean>(false);
  const titleImg = require('../assets/jjiggajjigga_title.png'); // require로 임포트
  const menuImg = require('../assets/menu_title.png'); // require로 임포트
  const [store, setStore] = useState<StoreInfo | null>(null); // StoreInfo 객체로 초기화
  const [menu, setMenu] = useState<MenuItem[]>([
    {name : '제육', price : 7000, image : null, min_quantity :0, max_quantity : 99, is_soldout : 0, store : 1002, description : 'dd', no : 5}
  ]);
  useEffect(() => {
        const getFetchStoreMenu = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/stores/id/1002`);
                // 응답이 배열인지 확인하고 설정
                console.log(response.data);
                const formattedMenu = response.data.menu_data;
                setMenu(formattedMenu);
                setStore(response.data.store_data);
              
                console.log(menu);
                console.log(store);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        getFetchStoreMenu();
    }, [])

  
    
  const formatPrice = (price:number) => {
      return new Intl.NumberFormat("ko-KR").format(price);
  };

  function handleMenuInfo() {
    navigation.navigate('MenuInfo');
  }

  function handleBack() {
    navigation.goBack();
  }
  function handleMoveShopping() {
    navigation.navigate('Shopping')
  }
  function handleLike() {
    setLikeChecked(!likeChecked);
    // const postFetchStoreLike = async () => {  //가게 아이디 넘겨줄 겁니다.
    //     if (likeChecked) {
    //       try {
    //         const response = await axios.post(`${BASE_URL}/stores/like`, {
    //           store_id = store_id;
    //         });
    //       } catch (error) {
    //         console.log("Error during Store Like");
    //       }
    //     }
    //   };
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrap}>
          <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={titleImg}/>
          <View style={styles.infoBox}>

            <View style={styles.infoTopText}>
              <View style={{flexDirection : 'row'}}>
                <Text style={styles.storeName}>{store?.store_name}</Text>
                <Text style={styles.storeMainMenu}>{store?.description}</Text>
              </View>
              <TouchableOpacity style={styles.likeImg} onPress={handleLike}>
                { likeChecked ?  <FullLike /> : <EmptyLike /> }
              </TouchableOpacity>
            </View>

            <View style={styles.infoText}>
              <View style={styles.locationImg}>
              <Location />
              </View>
              <Text style={styles.storeAddress}>{store?.location}</Text>
            </View>

            <View style={styles.infoText}>
              <View style={styles.clockImg}>
              <Clock />
              </View>
              <Text style={styles.storeOpen}>영업중</Text>
              <Text style={styles.storeFastOrder}>{isFastOrderOn ? ' • 패스트 오더 가능' : ' • 패스트 오더 불가능'}</Text>
            </View>
            <View style={styles.infoWaitTime}>
              <Text style={styles.minTime}>12시 기준   1인분-2인분 15분</Text>
              <View>
                <Text style={styles.maxTime}>2인분-3인분 30분</Text>
              </View>
            </View>
            <View style={styles.infoText}>
              <View style={styles.phoneImg}>
              <Phone />
              </View>
              <Text style={styles.storePhoneNumber}>010-7686-8560</Text>
            </View>
          </View>

          <View style={styles.padding}></View>

          <View style={styles.menuWrap}>
            {menu.map((item, index) => (
              <TouchableOpacity key={index} style={styles.menu} onPress={handleMenuInfo}>
                <View style={styles.menuBox}>
                  <Text style={styles.menuName}>{item.name}</Text>
                  <Text style={styles.menuPrice}>{`${formatPrice(item.price)}원`}</Text>
                </View>
                <View style={styles.menuImg}>
                  <Image source={menuImg} style={{height : '100%', width : '100%'}}/>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}