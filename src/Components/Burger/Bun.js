import React from 'react'
import style from './burger.module.css'


const Bun = (props) => {

    let bunClass;

    switch (props.type) {
        case 'top':
            bunClass = style.bun_top
            break
        case 'insert':
            bunClass = style.bun_insert
            break
        default:
            bunClass = ''
    }

    return (
        <div className={`${style.bun} ${bunClass} `} ></div>
    )
}


export default Bun