import React, { useState } from 'react';
import {
  View, 
  Text, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps'; // 인터페이스 import
import EmptyLike from '../assets/icon_empty_like.svg';
import FullLike from '../assets/icon_full_like.svg';
import Location from '../assets/icon_location.svg';
import Clock from '../assets/icon_clock.svg';
import Phone from '../assets/icon_phone.svg';
import StoreImg from '../components/StoreImg';

import styles from '../styles/Store';


// const BASE_URL = "http://3.39.26.152:8000";

export default function Store({ navigation }: NavigationProp): React.JSX.Element {
  const [isFastOrderOn, setIsFastOrderOn] = useState<boolean>(true);
  const [likeChecked, setLikeChecked] = useState<boolean>(false);
  const titleImg = require('../assets/jjiggajjigga_title.png'); // require로 임포트
  const menuImg = require('../assets/menu_title.png'); // require로 임포트
  const menu = [
    { name: '제육볶음', price: '7,000원', img: menuImg },
    { name: '김치찌개', price: '6,500원', img: menuImg },
    { name: '된장찌개', price: '6,000원', img: menuImg },
    { name: '갈비탕', price: '8,000원', img: menuImg },
    { name: '비빔밥', price: '7,500원', img: menuImg },
    { name: '떡볶이', price: '5,500원', img: menuImg },
    { name: '갈비탕', price: '8,000원', img: menuImg },
    { name: '비빔밥', price: '7,500원', img: menuImg },
    { name: '떡볶이', price: '5,500원', img: menuImg },
  ];

  // const rankingGet = async () => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/api/galleries/ranking?type=사진&category=반려동물`);
    //         // 응답이 배열인지 확인하고 설정
    //         if (Array.isArray(response.data)) {
    //             setRanking(response.data); // 배열로 설정
    //             console.log(response.data);
    //         } else {
    //             console.error("응답이 배열이 아닙니다:", response.data);
    //         }

    //     } catch (error) {
    //         console.error("Error fetching posts:", error);
    //     }
    // };

    // const handleSignup = async () => {  //가게 아이디 찜 넘겨줄 겁니다.
    //     if (email && password && name && phone && username) {
    //       try {
    //         const response = await axios.post(`${BASE_URL}/api/users/`, {
    //           email : email,
    //           password : password,
    //           name : name,
    //           phone : phone,
    //           username : username,
    //           subscribed:  clickAgreement === 1// 동의 여부
    //         });
            
    //         // 회원가입 성공 시 페이지 이동
    //         navigate('/login'); // 성공적으로 가입한 후 메인 페이지로 이동
    //       } catch (error) {
    //         console.log("Error during signup:");
    //       }
    //     }
    //   };


  function handleMenuInfo() {
    navigation.navigate('MenuInfo');
  }

  function handleBack() {
    navigation.goBack();
  }
  function handleMoveShopping() {
    navigation.navigate('Shopping')
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrap}>
          <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={titleImg}/>
          <View style={styles.infoBox}>

            <View style={styles.infoText}>
              <Text style={styles.storeName}>찌개찌개</Text>
              <Text style={styles.storeMainMenu}>찌개, 전골</Text>
              { likeChecked ?
                <TouchableOpacity style={styles.likeImg} onPress={() => setLikeChecked(false)}>
                  <FullLike />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.likeImg} onPress={() => setLikeChecked(true)}>
                  <EmptyLike />
                </TouchableOpacity>
              }
            </View>

            <View style={styles.infoText}>
              <View style={styles.locationImg}>
              <Location />
              </View>
              <Text style={styles.storeAddress}>경기 안산시 상록구 한양대학로 60</Text>
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
                  <Text style={styles.menuPrice}>{item.price}</Text>
                </View>
                <View style={styles.menuImg}>
                  <Image source={item.img} style={{height : '100%', width : '100%'}}/>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}