import React from 'react';
import st from './OnePicture.module.css'

type OnePictureType = {
    style:any
}


export const OnePicture = (props:OnePictureType) => {
    return (
        <div style={props.style} className={st.container}>
<button onClick={()=>alert('У меня пробег за МИЛЛИОН, какие ты запчасти хочешь?')} className={st.button}>РАЗОБРАТЬ НА ЗАПЧАСТИ</button>
        </div>
    )
}