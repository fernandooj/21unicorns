import React, {useEffect, useState}  from "react";
import { Text, View, Image, Platform, PermissionsAndroid, TouchableOpacity} from "react-native";
import { PERMISSIONS, check, request } from 'react-native-permissions'
import { Link } from "react-router-native";

import {style} from './style'

export const Intro=()=>{
    const [permission, setPermission] = useState(false)
    const [cameraGranted, setCameraGranted] = useState(false);
    useEffect(() => {
        requeredPermission()
      }, [])
    const requeredPermission =async()=>{
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Permission deneged',
                    message: 'We need access your gallery!',
                },
            );
            if (result !== 'granted') {
                setPermission(false)
                return;
            } else{
                setPermission(true)
            }
        }else{
            const res = await check(PERMISSIONS.IOS.CAMERA);
            console.log(res)
            // if (res === RESULTS.GRANTED) {
            //     setCameraGranted(true);
            // } else if (res === RESULTS.DENIED) {
            // const res2 = await request(PERMISSIONS.IOS.CAMERA);
            // res2 === RESULTS.GRANTED 
            //     ? setCameraGranted(true)
            //     : setCameraGranted(false)
            // }
        }
    }
    return(
        <View style={style.contain}>
            <View style={style.containText}>
                <Text style={style.text}>21 Unicorns</Text>
            </View>
            <View  style={style.containImage}>
                {
                    Platform.OS === "ios"
                    ?<Link style={style.btnBack} to="loadImages" style={style.btn}>
                        <Image source={require("../assets/img/iconCam.png")} style={style.imgPhoto}/>
                    </Link>
                    :permission
                    ?<Link style={style.btnBack} to="loadImages" style={style.btn}>
                        <Image source={require("../assets/img/iconCam.png")} style={style.imgPhoto}/>
                    </Link>
                    :<TouchableOpacity style={style.btnBack} onPress={()=>requeredPermission()} style={style.btn}>
                        <Image source={require("../assets/img/iconCam.png")} style={style.imgPhoto}/>
                    </TouchableOpacity>
                }
                
                <Link style={style.btnBack} to="loadVideo" style={style.btn}>
                    <Image source={require("../assets/img/iconVideo.png")} style={style.imgVideo}/>
                </Link>
            </View>
        </View>
    )
}