import React from 'react'
import css from './Card.module.css'

   export const RenderCard = ({ data, getText}) => {
        return (
            <div className={css.container}>
                 {/* сделаем рендер объекта data */}
                {data.map((item) => {
                    return (
                        <div className={css.cardPhoto}>
                            {/* вызываем ключи объекта через item  */}
                            <div className={css.cardTitle}>{item.title}</div>
                            <div className={css.Naselenya}> Населения:{item.Naselenya}</div>
                            {/* привязываем события к картинку с помощью onclick */}
                            <img src={item.img} onClick={() => getText(item)} className={css.imgCard}/>
                        </div>
                    )
                })}
            </div>
        )
    }
