import React from 'react'
import classes from './Input.module.css'

function isValid({ valid, shouldValid, touched }) {
    return !valid && shouldValid && touched
}

const Input = (props) => {
    const htmlFor = `${props.type}-${Math.random()}`
    const cls = [classes.Input]

    if (isValid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label
                htmlFor={htmlFor}>
                {props.label}
            </label>
            <input
                type={props.type || 'text'}
                id={htmlFor}
                onChange={props.onChange}
            />
            {
                isValid(props)
                    ? <span>{props.errorMessage}</span>
                    : null
            }

        </div>
    )
}

export default Input