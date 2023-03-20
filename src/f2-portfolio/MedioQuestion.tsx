import React from 'react';
import st from './MedioQuestion.module.css';
import {Project} from "./Project";


export const MedioQuestion = () => {
    return (
        <div className={st.page}>
            <div className={st.title}>
                <h2>Projects</h2>
            </div>
            <div className={st.container}>
                <div className={st.blok}>
                    <Project text={'Без медиа запроса---при уменьшении формата блоки перекидываются вниз за счет ( flex-wrap: wrap;) НО ПРИЭТОМ ОБА БЛОКА прижимаются к левой части экрана....СОВЕТУЮТ не делать много МЕДИА ЗАПРОСОВ потомучто они могут перезатирать другдруга и можно запутатся'}/>
                    <Project text={'МЕДИА ЗАПРОС это ПРО АДАПТИВНОСТЬ-чтоб на мобильный устройствах(У НИХ УЖЕ ЭКРАНЫ) отображался сайт тоже нормально.... ПРИ УМЕНЬшении ширины экрана БЛОКИ ПЕРЕКИНУТСЯ ОДИН ПОД ОДНОГО и плюс надо установить свойство justify-content:center  (вместо justify-content: space-between;)  И ТОГДА БЛОКИ БУДУТ ПО СЕРЕДИНЕ ЭКРАНА А НЕ ПРИЖАТЫ К КРАЮ ..........при скукоживании ВЫСМОТРЕТЬ РАЗМЕР ПРИ КОТОРОМ уже произошло перекидывание блока вниз---В ДАННОМ ПРИМЕРЕ ЭТО 832 ---это ТОЧКА с которой надо использовать другие стили justify-content:center ...........--------CИНТАКСИС МЕДИА ЗАПРОСА @media screen and (max-width : 832px){\n' +
                        '    .blok {\n' +
                        '        justify-content: center;\n' +
                        '    }\n' +
                        '}  ----------------ВНУТРИ  .blok { } БЫЛИ прописаны стили но я добавил СТИЛЬ ПРИ ОПРЕДЕЛЕННОМ РАЗМЕРЕ'}/>
                </div>
            </div>
        </div>
    )
}