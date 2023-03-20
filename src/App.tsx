import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Frame} from "./f1-porfolio/portfolioPart1/Frame";
import {Page} from "./f1-porfolio/portfolioPart1/page/Page";
import st from './App.module.css'
import {MedioQuestion} from "./f2-portfolio/MedioQuestion";


function App() {
    return (
        <div>
            {/*  Navlink---чтобы изменился URL, и тогда переход произойдет
        на компанету*/}
            <div className={st.link}>
                <div>
                    <div><NavLink to={'/frame'}><h5>1часть Разметка</h5></NavLink></div>
                    <div><NavLink to={'/page'}><h5>1часть Элементы на странице</h5></NavLink></div>
                </div>
                <div>
                    <div><NavLink to={'/medioQuestion'}><h5>2часть МедиаЗапросы</h5></NavLink></div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<h2>Тренировка перед созданием ПОРТФОЛИО</h2>}/>
                <Route path="/frame" element={<Frame/>}/>
                <Route path="/page" element={<Page/>}/>
                <Route path="/medioQuestion" element={<MedioQuestion/>}/>


                <Route path="/404" element={<h3>404: PAGE NOT FOUND</h3>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
    );
}

export default App;
