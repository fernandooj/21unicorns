import { Dimensions, Platform} from 'react-native';
import { MediaQueryStyleSheet } from "react-native-responsive";

const size = Dimensions.get('window');
export const style = MediaQueryStyleSheet.create({
    contain:{
       flex:1,
       backgroundColor:"#F4F7FD",
       textAlign:"center",
       justifyContent:"center",
       alignItems:"center"
    },
    containText:{
        flex:.8,
        justifyContent:"center",
    },
    text:{
        color:"#8A97AD",
        fontSize:35
    },
    containImage:{
        flexDirection:"row",
        flex:.2,
    },
    btn:{
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        padding:10,
        backgroundColor:"#fff",
        borderRadius:40,
        borderWidth:1,
        borderColor:"#000",
        width:80,
        height:80
    },
    imgPhoto:{
        width:36,
        height:36
    },
    imgVideo:{
        width:40,
        height:33
    }
})