import React from "react";
import { 
    SafeAreaView,
    ScrollView,
    View,

} from "react-native";
import styles from "../styles/Reception";
import { NavigationProp } from "../navigation/NavigationProps";
import TopTitle from "../components/TopTitle";



export default function Reception({navigation}:NavigationProp):React.JSX.Element {

    function handleMoveMain() {
        navigation.navigate('Main')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.wrap}>
                    <TopTitle name="주문내역" onPress={handleMoveMain} />

                    <View style={styles.padding}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}   