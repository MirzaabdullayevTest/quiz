import React, { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

const Auth = () => {
    const [form, setForm] = useState({
        isFormValid: false,
        formControls: {
            email: {
                type: 'email',
                label: 'Email',
                valid: false,
                touched: false,
                value: '',
                errorMessage: 'Write correct email value',
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                type: 'password',
                label: 'Password',
                valid: false,
                touched: false,
                value: '',
                errorMessage: 'Write correct password value',
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    })


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const registerHandler = () => {

    }

    const loginHandler = () => {

    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const onChangeHandler = (e, control) => {
        let newFormControls = { ...form.formControls }
        let controlField = newFormControls[control]

        controlField.value = e.target.value
        controlField.touched = true
        controlField.valid = validateControl(controlField.value, controlField.validation)

        newFormControls[control] = controlField

        let isFormValid = true

        Object.keys(form.formControls).forEach((controlName, index) => {
            isFormValid = newFormControls[controlName].valid
        })

        setForm({
            formControls: newFormControls,
            isFormValid
        })

    }

    function validateControl(value, validation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' // error yo'q bo'lsa true qiymat tushadi
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength // error yo'q bo'lsa true qiymat tushadi
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        }

        return isValid
    }



    const renderInputs = () => {
        return Object.keys(form.formControls).map((control, index) => {
            const controlParams = form.formControls[control]  // obj
            return (
                <Input
                    key={index + `${control}`}
                    type={controlParams.type}
                    value={controlParams.value}
                    label={controlParams.label}
                    valid={controlParams.valid}
                    touched={controlParams.touched}
                    errorMessage={controlParams.errorMessage}
                    shouldValid={controlParams.validation}
                    onChange={(e) => { onChangeHandler(e, control) }}
                />
            )
        })  // ['email', 'password']
    }

    return (
        <div className={classes.Auth}>
            <div>
                <h1>Auth</h1>

                <form
                    onSubmit={submitHandler}
                    className={classes.AuthForm}>

                    {renderInputs()}
                    <Button type="success" onClick={loginHandler} disabled={!form.isFormValid}>Login</Button>
                    <Button type="primary" onClick={registerHandler} disabled={!form.isFormValid}>Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Auth