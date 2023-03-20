import React from 'react';
import st from './Project.module.css';

type ProjectType= {
    text:string
}

export const Project = ({text}:ProjectType) => {
  return(
      <div className={st.blok}>
          {text}
      </div>
  )
}