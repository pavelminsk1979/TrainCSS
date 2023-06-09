import React from 'react';
import st from './Page.module.css';
import {Item} from "./Item";


export const Page = () => {
    return (
        <div className={st.page}>

            <div className={st.container}>

                <div className={st.headerAndItem}> {/*пропишу размещение Заголовка и ДИВКи С 6-стью  ШТУКАМИ в этом свойстве  */}

                <h3>ЗАГОЛОВОК</h3>
                    <div className={st.line}></div>

                    <div className={st.items}>
                        <Item text={'операцию корректно было бы называть «менеджментом», но не в современном мире. Это слишком чумазый процесс для массового осознания: белые манжеты '}
                            title={'Одна Штука'}/>
                        <Item text={'операцию корректно было бы называть «менеджментом», но не в современном мире.  белые манжеты моментально теряют презентабельный вид'}
                            title={'Еще Одна Штука'}/>
                        <Item text={'операцию корректно было бы не в современном мире. Это слишком чумазый процесс для массового осознания: белые манжеты моментально теряют презентабельный вид'}
                            title={'Копия тех Штук'}/>
                        <Item text={' современном мире. Это слишком чумазый процесс для массового осознания: белые манжеты моментально теряют презентабельный вид'}
                            title={'Четвертая Штука'}/>
                        <Item text={'операцию корректно было бы называть «менеджментом», но не в современном мире.'}
                            title={'Предпоследняя Штука'}/>
                        <Item text={' было бы называть «менеджментом», но не в современном мире. Это слишком чумазый процесс для массового осознания: белые манжеты моментально теряют презентабельный вид'}
                            title={'Последняя Штука'}/>
                    </div>

                </div>
            </div>
        </div>
    )
}