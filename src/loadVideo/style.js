import { Dimensions, Platform} from 'react-native';
import { MediaQueryStyleSheet } from "react-native-responsive";

const size = Dimensions.get('window');
export const style = MediaQueryStyleSheet.create({
    contenedor:{
        flex:1,
        width:"100%",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
    },
    preview:{
        width:size.width,
        height:size.height/2,
        borderRadius:7,
        marginTop:65
    },
    mainImage:{
        width:size.width,
        height:size.height/2,
        borderRadius:7,
    },
    imgTakeVideo:{
        width:100,
        height:100
    },
    btn:{
        position:"absolute",
        bottom:10,
        backgroundColor:"rgba(0,0,0,.4)",
        borderRadius:40,
        padding:10
    },
    imgBotonSelect:{
        width:20,
        height:20
    },
})