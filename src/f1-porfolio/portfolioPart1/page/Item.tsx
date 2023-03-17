import React from 'react';
import st from './Item.module.css';

type ItemType = {
    title: string
    text:string
}

export const Item = ({title,text}: ItemType) => {
    return (
        <div className={st.item}>
            <div className={st.img}>IMG</div>
            <h3>{title}</h3>
            <span>{text}</span>

        </div>
    )
}