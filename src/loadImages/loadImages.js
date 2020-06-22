import React, {useEffect, useState, Fragment} from 'react';
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
import CameraRoll from "@react-native-community/cameraroll";
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/header'
export const LoadImages = () => {
    const [images, setImages]       = useState([])
    const [mainImage, setMainImage] = useState("")
    const [loading,   setLoading]   = useState(false)
    const [resize,    setResize]    = useState(false)
    const [multiple,  setMultiple]    = useState(false)
    const [indexList, setIndexList] = useState(0)
    const [arrayMultiple, setArrayMultiple] = useState([])
    const [folder, setFolder] = useState([])
    const [final,   setFinal] = useState(40)
   
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
        loadGallery()
    }, [])
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////    LOAD PICTURES
    ////////////////////////////////////////////////////////////////////////////////////////
    const loadGallery=(filter)=>{
        CameraRoll.getPhotos({
            first: final,
            assetType: 'Photos',
        })
        .then(res => {
           
            let images = res.edges
            if(filter &&filter!=="Todos"){
                images= images.filter(e=>{
                    return e.node.group_name==filter
                })
            }
            let imagenes = images.map((e, index)=>{
                return{
                    uri:e.node.image.uri,
                    index:index+1
                }
            })
            console.log(imagenes)
            setImages(imagenes);
            setMainImage(imagenes[0].uri);
            setLoading(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////    AT THE END OF SCROLL LOAD NEW 20 IMAGES
    ////////////////////////////////////////////////////////////////////////////////////////
    const onScroll=(e)=> {
		let paddingToBottom = 10;
        paddingToBottom += e.nativeEvent.layoutMeasurement.height;
        if(e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
            loadGallery()
			setFinal(final+20)
        }
	}
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////    CHECK IF EXIST IMAGES SELECTED, AND ADD OR REMOVED
    ////////////////////////////////////////////////////////////////////////////////////////
    const editArraySelected=(index, value)=>{
        const exist = arrayMultiple.some(item => item.index == index);
        if(exist){
            let newData = arrayMultiple.filter(e=>{
                return e.index!==index
            })
            setArrayMultiple(newData)
        }else{
            setArrayMultiple(arrayMultiple.concat([{index, value}]))
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////    LOAD MAIN IMAGE
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    const renderMain = ()=>{
        return(
            <View>
                <Image source={{uri:mainImage}} style={[style.mainImage, {resizeMode:resize ?"contain" :"cover"}]} />
                <TouchableOpacity style={[style.btn, {left:10}]} onPress={()=>setResize(!resize)}>
                    <Image source={require("../assets/img/expand.png")}  style={style.imgBotonSelect}/>
                </TouchableOpacity>
                {
                    multiple
                    ?<LinearGradient colors={['#FEA0A8', '#FF7783']} style={style.btnMultiple}>
                        <TouchableOpacity onPress={()=>setMultiple(!multiple)}>
                            <Image source={require("../assets/img/multiple.png")}  style={style.imgBotonSelect}/>
                        </TouchableOpacity>
                    </LinearGradient>    
                    :<TouchableOpacity style={[style.btn, {right:10}]} onPress={()=>setMultiple(!multiple)}>
                        <Image source={require("../assets/img/multiple.png")} style={style.imgBotonSelect}/>
                    </TouchableOpacity>
                }
                
            </View>
        )
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////    LOAD GALLERY IMAGES
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    const renderGallery = ()=>{
        return images.map((item)=>{
            return(
                <TouchableOpacity style={style.btnImage} key={item.index} 
                    onPress={
                        multiple
                        ?()=>{editArraySelected(item.index, item.uri); }
                        :()=>{setIndexList(item.index); setMainImage(item.uri)}
                    }
                >  
                    {
                        (indexList===item.index &&!multiple) &&<View style={style.selected}></View>
                    }
                    {
                        multiple
                        &&arrayMultiple.map((item2, index2)=>{
                            return(
                                (item.index===item2.index)
                                &&<LinearGradient colors={['#FEA0A8', '#FF7783']} key={index2} style={style.selectedMultiple}>
                                    <Text style={style.textSelectedMultiple}>{index2+1}</Text>
                                </LinearGradient>
                            )
                        })   
                    }
                    {
                        Platform.OS=='ios'
                        ?<Image  
                            style={style.imageIos}
                            source={{
                                uri: item.uri,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        :<FastImage  
                            style={style.image}
                            source={{
                                uri: item.uri,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    }
                   
                </TouchableOpacity>
            )
        })
    }
    return(
        <View style={style.contenedor}> 
            <Header text="Recientes" image={!multiple ?mainImage :arrayMultiple.length>0 ?arrayMultiple[0].value :null} folder={(data)=>setFolder(data)} />
            {
                folder.length>0
                &&<ScrollView style={style.contenFolder}>
                    {
                        folder.map((e, index)=>{
                            return (
                                <TouchableOpacity key={index} onPress={()=>{loadGallery(e.title); setFolder([])}}>
                                    <Text style={style.textFolder}>{e.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            }
            {
                loading
                &&<Fragment>
                    <View style={style.containMain}>
                        {renderMain()}
                    </View>
                    <ScrollView style={style.containGallery} onScroll={(e)=>onScroll(e)}>
                        <View style={style.subContainGallery}>
                            {renderGallery()}
                        </View>
                    </ScrollView>
                </Fragment>
            }
        </View>
   )
}
