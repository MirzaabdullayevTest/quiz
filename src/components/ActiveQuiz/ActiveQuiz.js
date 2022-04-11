import React from 'react'
import classes from './ActiveQuiz.module.css'
import ActiveQuizList from './ActiveQuizList/ActiveQuizList'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                {/* Savollar bo'ladi */}
                <span>  {/* Savol */}
                    <strong>3. </strong>
                    {props.question}
                </span>

                <small>1 in 20</small>
                {/* Nechta savoldan nechinchisi */}
            </p>

            <ActiveQuizList
                answers={props.answers}
                onClick={props.onClick}
                hasError={props.hasError}
            />

        </div>
    )
}

export default ActiveQuiz