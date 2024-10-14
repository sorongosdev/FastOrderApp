import styles from "../styles/BottomButton"

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

interface BottomButtonProps {
    name: string;
    onPress : () => void
}

export default function BottomButton({name, onPress}:BottomButtonProps):React.JSX.Element {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
}