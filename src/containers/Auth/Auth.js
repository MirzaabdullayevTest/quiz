import React from 'react'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'

const Auth = () => {

    const registerHandler = () => {

    }

    const loginHandler = () => {

    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.Auth}>
            <div>
                <h1>Auth</h1>

                <form
                    onSubmit={submitHandler}
                    className={classes.AuthForm}>
                    <Input type={'text'} label={'Login'} errorMessage="Complate correct login" />
                    <Input type={'password'} label={'Password'} errorMessage="Complate correct password" />
                    <Button type="success" onClick={loginHandler}>Login</Button>
                    <Button type="primary" onClick={registerHandler}>Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Auth