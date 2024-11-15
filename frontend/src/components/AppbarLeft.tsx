import {View, Text, TouchableOpacity} from 'react-native';
/** Icons */
import DetailIcon from '@assets/icon_back.svg';
/** Styles */
import styles from '../styles/AppbarLeft';
import {StackNavigationProp} from '@react-navigation/stack';

interface TitleProp {
  title: string;
}

// StackNavigationProp을 사용하여 navigation prop 타입 정의
interface AppbarProps extends TitleProp {
  navigation: StackNavigationProp<any>; // 여기서 StackNavigationProp을 사용
}

export default function AppbarLeft(props: AppbarProps): React.JSX.Element {
  const {title, navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <DetailIcon width={12} height={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}></View>
    </View>
  );
}
