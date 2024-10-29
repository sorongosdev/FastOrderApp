import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import BackArrow from '../assets/icon_back_arrow.svg';
import styles from "../styles/TopTitle";

interface TopTitleProps {
    name : string,
    onPress : () => void
}

export default function TopTitle({name,onPress}:TopTitleProps):React.JSX.Element {
    return(
    <View style = {styles.wrapper}>
        <TouchableOpacity style = {styles.backArrowIcon} onPress={onPress}>
            <BackArrow/>
        </TouchableOpacity>
        <Text style={styles.mainText}>{name}</Text>
    </View>
    )
}
