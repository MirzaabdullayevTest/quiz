import React from 'react'
import classes from './QuizList.module.css'
import { Link } from 'react-router-dom'

const QuizList = () => {
    return (
        <div className={classes.QuizList}>
            <div>
                <h1>QuizList</h1>
                <ul>
                    {[1, 2, 3].map((quiz, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/quiz/' + quiz}>Quiz {quiz}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default QuizList