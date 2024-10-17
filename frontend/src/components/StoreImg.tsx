import { View } from 'react-native';
import { NavigationProp } from '../navigation/NavigationProps';
import Cart from '../assets/icon_cart.svg';
import BackArrow from '../assets/icon_back_arrow.svg';
import styles from '../styles/StoreImg';

export default function StoreImg({navigation} : NavigationProp): React.JSX.Element {
    
    
    return (
        <View style={styles.storeImgContainer}>
          <View style={styles.backArrowImg}>
            <BackArrow width={'12%'} height={'24%'} />
          </View>
          <View style={styles.cartImg}>
            <Cart width={'12%'} height={'20%'}/>
          </View>
        </View>
    )
}