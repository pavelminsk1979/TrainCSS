

import React, { ChangeEvent, useRef } from 'react';

export const Card = () => {

  const inputRef = useRef<HTMLInputElement>(null)/* за сет этого хука
  работает -ПРИ НАЖАТИИ НА КНОПКУ БАТТОН КОМАНДА ПЕРЕДАЕТСЯ НА
  иНПУТ И СРАБАТЫВАЕТ ОТКРЫТИЕ ОКНА С КАРТИНКАМИ*/

  const selectFileHandler = () => {
    inputRef && inputRef.current?.click(); /*тут происходит вызов инпута и показывается окно с картинками*/
  };

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {  /*это -КОГДА КАРТИНУ УЖЕ ВЫБРАЛ
    и-ВАЖНО при работе с картинками--ВСЕГДА ИДЕТ РАБОТА С МАССИВОМ даже если картинка будет одна, всеравно она в массиве*/
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      console.log('file: ', file)
    }
  };

  return (
      <div>
        <button style={{background: 'red'}} onClick={selectFileHandler}>upload file</button>
        <input
            style={{display: 'none'}} /* вот так делаю невидимым */
            ref={inputRef} /* это ОЧЕНЬ важно прописать-связзывает инпут с баттоном*/
            type="file"
            onChange={uploadHandler}
        />
      </div>
  )
}


/*
вот и весь код и на экране  будет КНОПКА с надписью-ВЫБЕРЕТЕ ФАЙЛ
и по нажатию откроется окно и после того как я
выберу файл его имя отобразится СПРАВА ОТ КНОПКИ

--------далее добавлю такой атрибут  accept="image/*"
ЗВЕЗДОЧКА обозначает любые форматы картинок  и этим
атрибутом я разрешаю выбирать только картинки---видио и
музыка станут не видимыми
export const Card = () => {
  return(
      <div>
        <input type="file" accept="image/!*" />
      </div>
  )
}*/
