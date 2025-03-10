import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    storeImgContainer : {
        width: '100%',
        height: 165,
        backgroundColor : '#FFF',
        position : 'relative'
    },
    backArrowImg : {
        height : '15%',
        width : '15%',
        position : 'absolute',
        top : 10,
        zIndex : 2
      },  
      cartImg : {
        height : '15%',
        width : '15%',
        position : 'absolute',
        right : 10,
        top : 10,
        zIndex : 2
      },
      img : {
        zIndex : 1,
        height : 165,
        width : '100%'
      }
    
});
export default styles;