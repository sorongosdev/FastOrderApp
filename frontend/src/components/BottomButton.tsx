import styles from "../styles/BottomButton"

import {
    Alert,
    Text,
    TouchableOpacity
} from 'react-native';

interface BottomButtonProps {
    name: string;
    onPress: () => void;
    checked: boolean;
    color : string;
}

export default function BottomButton({ name, onPress, checked, color }: BottomButtonProps): React.JSX.Element {

    function handleAlert() {
        Alert.alert("필수 항목을 다 채워주시기 바랍니다.");
    }
    return (
        <TouchableOpacity 
            style={[styles.buttonContainer, checked ? { backgroundColor: color} : {}]} 
            onPress={checked ? onPress : handleAlert}
        >
            <Text style={[styles.buttonText, checked ? { color : '#FFF'} : {color : '#FFF'}]}>{name}</Text>
        </TouchableOpacity>
    )
}
