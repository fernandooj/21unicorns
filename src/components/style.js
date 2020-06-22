import { Dimensions, Platform} from 'react-native';
import { MediaQueryStyleSheet } from "react-native-responsive";

const size = Dimensions.get('window');
export const style = MediaQueryStyleSheet.create({
    contenedor:{
        flexDirection:"row",
        alignItems:"center",
        textAlign:"center",
        justifyContent:"center",
        paddingVertical:10
    },
    row:{
        width:"33%"
    },
    row2:{
        width:"33%",
        alignItems:"center"
    },
    row3:{
        width:"33%",
        alignItems:"flex-end"
    },
    btnBack:{
        padding:10
    },
    imgArrowLeft:{
        width:20,
        height:20
    },
    btnNext:{
        right:10,
		padding:10,
		shadowColor: 'rgba(0,0,0, .4)', // IOS
		borderColor:"rgba(0,0,0,0)",
		shadowOffset: { height: 2, width: 2 }, // IOS
		shadowOpacity: .5, // IOS
		shadowRadius: 5, //IOS
		backgroundColor: '#fff',
		elevation: 7, // Android
		borderRadius:5,
		textAlignVertical:"center",
    },
    textReciente:{
        color:"#8A97AD"
    },
    textSiguiente:{
        color:"#FF7783"
    },
    btnNextDisable:{
        backgroundColor:"#F4F7FD",
        right:10,
		padding:10,
    },
    textSiguienteDisable:{
        color:"#8A97AD"
    },

})