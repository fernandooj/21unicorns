import React, {useState} from "react";
import { Text, View, Image, ScrollView, Platform, TextInput, Switch } from "react-native";
 
import {Header} from '../components/header'
import {style} from './style'

export const NewPost=(props)=>{
    const [name1, setName1] = useState(false)
    const [name2, setName2] = useState(true)
    const [name3, setName3] = useState(false)
    const [name4, setName4] = useState(false)
    const [name5, setName5] = useState(false)
    const [name6, setName6] = useState(false)
    console.log(props.location.pathname.slice(8, props.location.pathname.length))
    const renderContenido =()=>{
        return (
            <View style={style.subContainer}>
                <View style={style.subContainer1}>
                    <Image source={{uri:props.location.pathname.slice(9, props.location.pathname.length)}} style={style.mainImage} />
                    <TextInput style={style.input} placeholder="Escribe un pie de foto de imagen" />
                </View>
                <View style={style.subContainer1}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/people.png")} style={{width:30, height:18}} />
                        <Text style={style.text}>Etiquetar personas <Text style={style.textIn}>(2)</Text></Text>
                    </View>
                    <View style={style.subContainer3}>
                        <Image source={require("../assets/img/getIn.png")}  style={style.imgGetIn}/>
                    </View>
                </View>
                <View style={style.subContainer1}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/products.png")}  style={style.imgIcon} />
                        <Text style={style.text}>Etiquetar productos <Text style={style.textIn}>(4)</Text></Text>
                    </View>
                    <View>
                        <Image source={require("../assets/img/getIn.png")}  style={style.imgGetIn}/>
                    </View>
                </View>
                <View style={style.subContainer1}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/hashtag.png")}  style={style.imgIcon}/>
                        <Text style={style.text}>Agregar hashtags <Text style={style.textIn}>(2)</Text></Text>
                    </View>
                    <View>
                        <Image source={require("../assets/img/getIn.png")}  style={style.imgGetIn}/>
                    </View>
                </View>
                <View style={style.subContainer1}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/pin.png")} style={{width:14, height:25}} />
                        <Text style={style.text}>Madrid, España</Text>
                    </View>
                    <View>
                        <Image source={require("../assets/img/close.png")}  style={style.imgGetIn}/>
                    </View>
                </View>
            </View>
        )
    }
    const renderContenido2 =()=>{
        return(
            <View style={style.subContainer}>
                <View style={style.subContainerSwitch}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/avatar1.png")} style={style.avatar} />
                        <Text style={style.text}>Jhon Doe</Text>
                    </View>
                    <Switch
                        trackColor={{ true: '#FEA0A8', false: Platform.OS=='android'?'#A0FED6':'#A0FED6'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(name1 ?'#FEA0A8':'#A0FED6')]}
                        ios_backgroundColor="#A0FED6"
                        style={[name1 ?style.switchEnableBorder:style.switchDisableBorder]}
                        onValueChange = {(name1)=>setName1(name1)}
                        value = {name1}  
                    />
                </View>
                <View style={style.subContainerSwitch}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/avatar2.png")} style={style.avatar} />
                        <Text style={style.text}>Versace</Text>
                    </View>
                    <Switch
                        trackColor={{ true: '#FEA0A8', false: Platform.OS=='android'?'#A0FED6':'#A0FED6'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(name2 ?'#FEA0A8':'#A0FED6')]}
                        ios_backgroundColor="#A0FED6"
                        style={[name2 ?style.switchEnableBorder:style.switchDisableBorder]}
                        onValueChange = {(name2)=>setName2(name2)}
                        value = {name2}  
                    />
                </View>
                <View style={style.subContainerSwitch}>
                    <View style={style.subContainer2}>
                        <Image source={require("../assets/img/avatar3.png")} style={style.avatar} />
                        <Text style={style.text}>Coca-cola</Text>
                    </View>
                    <Switch
                        trackColor={{ true: '#FEA0A8', false: Platform.OS=='android'?'#A0FED6':'#A0FED6'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(name3 ?'#FEA0A8':'#A0FED6')]}
                        ios_backgroundColor="#A0FED6"
                        style={[name3 ?style.switchEnableBorder:style.switchDisableBorder]}
                        onValueChange = {(name3)=>setName3(name3)}
                        value = {name3}  
                    />
                </View>

            </View>
        )
    }
    const renderContenido3 =()=>{
        return(
            <View style={style.subContainer}>
                <View style={style.subContainerSwitch}>
                    <View style={style.subContainer2}>
                        <Text style={style.text}>Facebook</Text>
                    </View>
                    <Switch
                        trackColor={{ true: '#FEA0A8', false: Platform.OS=='android'?'#A0FED6':'#A0FED6'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(name4 ?'#FEA0A8':'#A0FED6')]}
                        ios_backgroundColor="#A0FED6"
                        style={[name4 ?style.switchEnableBorder:style.switchDisableBorder]}
                        onValueChange = {(name4)=>setName4(name4)}
                        value = {name4}  
                    />
                </View>
                <View style={style.subContainerSwitch}>
                    <View style={style.subContainer2}>
                        <Text style={style.text}>Twitter</Text>
                    </View>
                    <Switch
                        trackColor={{ true: '#FEA0A8', false: Platform.OS=='android'?'#A0FED6':'#A0FED6'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(name5 ?'#FEA0A8':'#A0FED6')]}
                        ios_backgroundColor="#A0FED6"
                        style={[name5 ?style.switchEnableBorder:style.switchDisableBorder]}
                        onValueChange = {(name5)=>setName5(name5)}
                        value = {name5}  
                    />
                </View>
                <View style={style.subContainerSwitch}>
                    <View style={style.subContainer2}>
                        <Text style={style.text}>Instagram</Text>
                    </View>
                    <Switch
                        trackColor={{ true: '#FEA0A8', false: Platform.OS=='android'?'#A0FED6':'#A0FED6'  }}
                        thumbColor={[Platform.OS=='ios'?'#FFFFFF':(name6 ?'#FEA0A8':'#A0FED6')]}
                        ios_backgroundColor="#A0FED6"
                        style={[name6 ?style.switchEnableBorder:style.switchDisableBorder]}
                        onValueChange = {(name6)=>setName6(name6)}
                        value = {name6}  
                    />
                </View>

            </View>
        )
    }
    return(
        <View style={{marginBottom:80}}> 
            <Header text="Nueva Publicación" />
            <ScrollView >
                {renderContenido()}
                <Text style={style.titulo}>Publicar como</Text>
                {renderContenido2()}
                <Text style={style.titulo}>Publicar en otras redes</Text>
                {renderContenido3()}
            </ScrollView>
        </View>
    )
}