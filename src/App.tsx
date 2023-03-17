import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Frame} from "./f1-porfolio/portfolioPart1/Frame";
import {Page} from "./f1-porfolio/portfolioPart1/page/Page";



function App() {
  return (
    <div>
      {/*  Navlink---чтобы изменился URL, и тогда переход произойдет
        на компанету*/}
        <div><NavLink to={'/frame'}>1PorfolioFrame</NavLink></div>
        <div><NavLink to={'/page'}>1PorfolioPage</NavLink></div>

        <Routes>
            <Route path="/" element={<h2>CSS</h2>}/>
            <Route path="/frame" element={<Frame/>}/>
            <Route path="/page" element={<Page/>}/>


            <Route path="/404" element={<h3>404: PAGE NOT FOUND</h3>}/>
            <Route path="*" element={<Navigate to ="/404" />}/>
        </Routes>
    </div>
  );
}

export default App;
