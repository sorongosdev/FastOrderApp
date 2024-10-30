import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import { NavigationProp } from '../navigation/NavigationProps';
import styles from "../styles/MenuInfo";
import StoreImg from "../components/StoreImg";
import BottomButton from "../components/BottomButton";
import EmptyLike from "../assets/icon_empty_like.svg";
import FullLike from "../assets/icon_full_like.svg";

export default function MenuInfo({ navigation }: NavigationProp):React.JSX.Element {
    const [count, setCount] = useState(0);
    const [likeChecked, setLikeChecked] = useState<boolean>(false);
    const TitleImg = require('../assets/jjiggajjigga_title.png'); // require로 임포트
    
    function handleOrder() {
        console.log(count);
        navigation.navigate('Shopping');
    }

    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function handlePlus() {
        setCount(count + 1);
    }

    function handleBack() {
        navigation.navigate('Store')
    }
    function handleMoveShopping() {
        navigation.navigate('Shopping')
    }
    return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.wrap}>
            <StoreImg onBack={handleBack} onShopping={handleMoveShopping} img={TitleImg}/>
            <View style={styles.storeBox}>
                    <View style={styles.InfoBox}>
                        <Text style={styles.menuName}>제육볶음</Text>
                        <View>
                        { likeChecked ?
                            <TouchableOpacity onPress={() => setLikeChecked(false)}>
                            <FullLike />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setLikeChecked(true)}>
                            <EmptyLike />
                            </TouchableOpacity>
                        }
                        </View>
                    </View>
                    <View style={styles.InfoBox}>
                        <Text style={styles.price}>가격</Text>
                        <Text style={styles.price}>7,000원</Text>
                    </View>
            </View>

            <View style={styles.padding}></View>

            <View style={styles.count}>
                <TouchableOpacity onPress={handleMinus}>
                    <Text style={styles.countText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.countText}>{count}</Text>
                <TouchableOpacity onPress={handlePlus}>
                    <Text style={styles.countText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
        <BottomButton name="주문하기" onPress={handleOrder} checked={true}/>
    </SafeAreaView>
    )
}   