import styles from "../styles/BottomButton"

import {
    Text,
    TouchableOpacity
} from 'react-native';

interface BottomButtonProps {
    name: string;
    onPress: () => void;
    checked: boolean;
}

export default function BottomButton({ name, onPress, checked }: BottomButtonProps): React.JSX.Element {
    return (
        <TouchableOpacity 
            style={[styles.buttonContainer, checked ? { backgroundColor: '#1B1B1B'} : {}]} 
            onPress={onPress}
        >
            <Text style={[styles.buttonText, checked ? { color : '#FFF'} : {color : '#FFF'}]}>{name}</Text>
        </TouchableOpacity>
    )
}
