import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerItem = ({ text, id, onClick, hasError }) => {
    const cls = [classes.AnswerItem]

    if (hasError) {
        cls.push(classes.Error)
    } else {
        cls.push(classes.Success)
    }

    return (
        <li className={cls.join(' ')} id={id} onClick={() => { onClick(id) }}>
            {text}
        </li>
    )
}

export default AnswerItem