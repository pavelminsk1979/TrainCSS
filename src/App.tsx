import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Frame} from "./f1-porfolio/portfolioPart1/Frame";



function App() {
  return (
    <div>
      {/*  Navlink---чтобы изменился URL, и тогда переход произойдет
        на компанету*/}
        <div><NavLink to={'/frame'}>PorfolioPart1</NavLink></div>

        <Routes>
            <Route path="/" element={<h2>CSS</h2>}/>
            <Route path="/frame" element={<Frame/>}/>


            <Route path="/404" element={<h3>404: PAGE NOT FOUND</h3>}/>
            <Route path="*" element={<Navigate to ="/404" />}/>
        </Routes>
    </div>
  );
}

export default App;
