import React, {useEffect, useState, useRef} from 'react';
import {
    Platform,
    PermissionsAndroid,
    View,
    Text,
    ScrollView,
    TouchableOpacity, 
    Image
} from 'react-native';
import {style} from './style'
import {RNCamera} from 'react-native-camera';
 console.log(RNCamera.constants)
 
import {Header} from '../components/header'
export const LoadVideo = () => {
    let cameraRef = useRef(null)
    const [mirrorMode, setMirrorMode] =useState(true)
    const [image, setImage] =useState(null)
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////    LOAD PERMISSION FOR ANDROID AND LOAD THE FIRST IMAGES
    ////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        async function requeredPermission() {
            if (Platform.OS === 'android') {
                const result = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    {
                        title: 'Permission Explanation',
                        message: 'ReactNativeForYou would like to access your photos!',
                    },
                );
                if (result !== 'granted') {
                    console.log('Access to pictures was denied');
                    return;
                } 
            }
        }
        requeredPermission()
    }, [])
     
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////    TAKE VIDEO
    ///////////////////////////////////////////////////////////////////////////////////////////////////    
    const takeVideo = async()=> {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            setImage(data.uri);  
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////    LOAD MAIN IMAGE OR VIDEO
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    const renderMain = ()=>{
        return(
            <View>
                {
                    image
                    ?<Image source={{uri:image}} style={style.mainImage} />
                    : <RNCamera
                        ref={cameraRef}
                        style={style.preview}
                        // aspect={Camera.constants.Aspect.fill}
                        captureAudio={false}
                        
                        mirrorImage={mirrorMode}
                        >
                    </RNCamera>
                }
                <TouchableOpacity style={[style.btn, {left:10}]} onPress={()=>setMirrorMode(!mirrorMode)}>
                    <Image source={require("../assets/img/switch.png")}  style={style.imgBotonSelect}/>
                </TouchableOpacity>
            </View>
        )
    }
    
    return(
       <View style={style.contenedor}> 
       <Header text="Tomar Foto" image={image} />
     
            <View style={style.containMain}>
                {renderMain()}
            </View>
            <ScrollView style={style.containGallery}>
                <View style={style.subContainGallery}>
                <View style={style.captureContainer}>
                    <TouchableOpacity style={style.capture} onPress={()=>takeVideo()}>
                        <Image source={require("../assets/img/takeVideo.png")}  style={style.imgTakeVideo}/>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
           
       </View>
   )
}
