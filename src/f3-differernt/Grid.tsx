import React from 'react';
import st from './Grid.module.css'

export const Grid = () => {
  return(
      <div className={st.container}>
          <div className={st.child}>1</div>
          <div className={st.child}>2</div>
          <div className={st.child}>3</div>
          <div className={st.child}>4</div>
          <div className={st.child}>5</div>
          <div className={st.child}>6</div>
          <div className={st.child}>7</div>
          <div className={st.child}>8</div>
      </div>
  )
}