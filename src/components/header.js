import React, {useEffect, useState, Fragment} from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    Image
} from 'react-native';
import { Link } from "react-router-native";
import {style} from './style'
import CameraRoll from "@react-native-community/cameraroll";
export const Header = (props) => {
    let  {image, text} = props
   
    const loadGallery=()=>{
        CameraRoll.getAlbums({
            assetType: 'Photos',
        })
        .then(data => {
            data.unshift({title: "Todos"})
            props.folder(data);
            
        })
        .catch((error) => {
            console.log(error);
        });
    }
 
    return(
        <View style={style.contenedor}>
            <View style={style.row}>
                <Link style={style.btnBack} to="/">
                    <Image source={require("../assets/img/arrowLeft.png")}  style={style.imgArrowLeft}/>
                </Link>
            </View>
            {
                text==="Recientes"
                ?<TouchableOpacity style={style.row2} onPress={()=>loadGallery()}>
                    <Text style={style.textReciente}>{text}</Text>
                </TouchableOpacity>
                :<TouchableOpacity style={style.row2}>
                    <Text style={style.textReciente}>{text}</Text>
                </TouchableOpacity>
            }
           
            <View style={style.row3}>
                {
                    image
                    ?<Link style={style.btnNext} to={`newPost/${image}`}>
                        <Text style={style.textSiguiente}>Siguiente</Text>
                    </Link>
                    :<Link style={style.btnNextDisable}>
                        <Text style={style.textSiguienteDisable}>Siguiente</Text>
                    </Link>
                }
            </View>
        </View>
    )
}