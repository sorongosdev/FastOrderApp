import React from "react";
import {
    View,
    Text,
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';
import styles from "../styles/SignUp";

export default function SignUp({navigation}: NavigationProp):React.JSX.Element {
    function handleLoginPage() {
        navigation.navigate('Login')
    }

    return (<View style={styles.wrap}>
        <Text onPress={handleLoginPage}>SignUp page</Text>
    </View>)
}

