import React from 'react';
import st from './Frame.module.css';


export const Frame = () => {
    return (
        <div>


            <div className={st.header}> {/*на всю длинну*/}
                <div className={st.container}> {/*делает отступы по краям и будут
                                       отступы одинаковые для всех страниц сайта И ВСЁ СОДЕРЖИМОЕ СТРАНИЦ
                                    БУДЕТ ВНУТРИ ЭТОГО КОНТЕЙНЕРА*/}

                    <div className={st.wrapper}>  {/*wrapper-обертка----двигает по контейнеру рамку- ВНУТРИ РАМКИ ТРИ ССЫЛКИ это разница с нижней частью---В НИЖНЕЙ ЧАСТИ НЕ НАДО ДВИГАТЬ РАМКУ(К ЛЕВОМУ КРАЮ и по середине)  ВНУТРИ КОТОРОЙ ЭЛЕМЕНТЫ-поэтому тут на оду обертку больше*/}

                        <div className={st.menu}>{/* menu- это рамка с тремя ссылками И РАЗМЕЩЕНИЕ ССЫЛОК ВНУТРИ ЭТОЙ РАМКИ ТУТ ПРОПИСЫВАЮ и длинну рамки и выстраивание ссылок одну за другой (А НЕ ОДНУ ПОД ДРУГОЙ) */}
                            <div><a href=""
                                   className={st.a}>СсылкаПервая</a></div>
                            <div><a href="">СсылкаВторая</a></div>
                            <div><a href="">СсылкаТретья</a></div>
                        </div>
                    </div>
                </div>

            </div>




            <div className={st.body}>
                <div className={st.container}>  {/*Переиспользовал отступы по краям и плюс ПАДДИНГ чтоб содержимое не прижималось к краю*/}
                    <div className={st.blok}> {/*внутри два элемента ЛЕВЫЙ И ПРАВЫЙ---для текста и картинки*/}
                        <div className={st.left}></div>
                        <div className={st.right}></div>
                    </div>
                </div>
            </div>



        </div>
    )
}