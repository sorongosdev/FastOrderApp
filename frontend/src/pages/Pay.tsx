import React from "react";
import {
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps';
import styles from "../styles/Pay";

export default function Pay({ navigation }: NavigationProp):React.JSX.Element {
    return (<SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>회원가입</Text>
        <View style={styles.padding}></View>
    </SafeAreaView>
    )
}   