import React from 'react';
import st from './Pictures.module.css';
import {OnePicture} from "./OnePicture";
import mersedesImg from '../../assets/image/mersedes.jpg'
import pepsiImg from '../../assets/image/pepsi.jpg'


export const Pictures = () => {

    const pepsi = {
        backgroundImage:`url(${pepsiImg})`,
    }
    const mersedes = {
        backgroundImage:`url(${mersedesImg})`,
    }

    return (
        <div className={st.page}>
           <OnePicture style={pepsi}/>
           <OnePicture style={mersedes}/>
        </div>
    )
}