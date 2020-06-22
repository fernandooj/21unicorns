import { Dimensions, Platform} from 'react-native';
import { MediaQueryStyleSheet } from "react-native-responsive";

const size = Dimensions.get('window');
export const style = MediaQueryStyleSheet.create({
    contenedor:{
        flex:1
    },
    subContainer:{
        alignItems:"center"
    },
    subContainer1:{
        width:"92%",
        flexDirection:"row",
        padding:10,
        borderWidth:2,
		borderColor:"#F4F7FD",
		backgroundColor: '#fff',
		borderRadius:5,
        textAlignVertical:"center",
        marginVertical:5
    },
    subContainer2:{
        flexDirection:"row",
        width:"90%",
        textAlign:"center",
        alignItems:"center",
    },
    input:{
        textAlignVertical: 'top',
        width:"70%",
    },
    mainImage:{
        width:100,
        height:100,
        borderRadius:10
    },
    imgIcon: {
        width:23,
        height:23
    },
    imgGetIn:{
        width:20,
        height:20
    },
    text:{
        left:15
    },
    subContainerSwitch:{
        width:"92%",
        flexDirection:"row",
        
        padding:2,
    },
    avatar:{
        width:50,
        height:50
    },
    titulo:{
        fontSize:22,
        left:"5%",
        marginTop:10,
        marginBottom:5
    }
})