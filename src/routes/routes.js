import React from "react";
 
import { NativeRouter, Route } from "react-router-native";


import {Intro}      from '../intro/intro'
import {LoadImages} from '../loadImages/loadImages'
import {LoadVideo} from '../loadVideo/loadVideo'
import {NewPost}    from '../newPost/newPost'


export const Routes=()=>{
    return(
        <NativeRouter>
            <Route exact path="/"           component={Intro} />
            <Route exact path="/loadImages" component={LoadImages} />
            <Route exact path="/loadVideo"  component={LoadVideo} />
            <Route path="/newPost"  component={NewPost} />
            <Route path="/newPost/:urlImage"  component={NewPost} />
        </NativeRouter>
    )
}