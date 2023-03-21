import React from 'react';
import st from './Fonts.module.css'


export const Fonts = () => {
  return(
      <div className={st.page}>
          <div className={st.title}>
              <h2>THE BEST-прибэст TITLE</h2>
          </div>
          <div className={st.frame}>
<span>
УСТАНОВКА ШРИФТОВ
1 перейти на сайт google fonts
https://fonts.google.com/
  2 выбрать шрифт и его открыть и нажат + в кружке,
чтобы сменился на минус в кружке
3  потом в верхнем правом углу сайта нажать и вылезет
окно и в нем скопироват сгенерерованую строку для
выбранного шрифта....можно разные размеры выбирать
----сгкнерирует в единую ссылку

"https://fonts.googleapis.com/css2?family=Rubik+
Spray+Paint&display=swap" rel="stylesheet"
4  в моем проэкте на уровне папки SRC внутри папки public
 внутри файла index.html ----там уже есть подобные
теги link   и не удаляя ничего добавляю тот который
на сайте сгенерировался
5 теперь шрифты доступны И ДОСТУПНЫ ОНИ ПОД
ОПРЕДЕЛЕННЫМ НАЗВАНИЕМ ---это название на сайте
в томже месте где и сгенерированая  href только
                                         в самом низу --тут--- CSS rules to specify families
font-family: 'Rubik Spray Paint', cursive;
6  и далее вставляю в  .title h2 ---font-family: 'Rubik Spray Paint', cursive;

    ..........font-weight: 100;   корректировка шрифта  на 100 более
тонкий а на 900 жирный
----------font-size: 18px; размер шрифта</span>
          </div>
      </div>
  )
}