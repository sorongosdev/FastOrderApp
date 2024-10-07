import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {NavigationProp} from '../navigation/NavigationProps';

export default function SignUp({navigation}: NavigationProp):React.JSX.Element {
    function handleLoginPage() {
        navigation.navigate('Login')
    }

    return (<View style={styles.wrap}>
        <Text onPress={handleLoginPage}>SignUp page</Text>
    </View>)
}

const styles = StyleSheet.create( {
    wrap : {
        flex : 1,
        color : 'black',
        justifyContent : 'center',
        alignItems : 'center'
    }
})