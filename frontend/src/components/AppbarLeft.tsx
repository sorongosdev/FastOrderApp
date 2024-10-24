import styles from '../styles/AppbarDefault';

import {View, Text} from 'react-native';

interface AppbarProps {
  title: string;
}

export default function AppbarLeft({title}: AppbarProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
