import React from 'react'
import classes from './QuizList.module.css'
import { Link } from 'react-router-dom'

const QuizList = () => {
    return (
        <div className={classes.QuizList}>
            <h1>QuizList</h1>
            <h1><Link to={'/quiz/1'}>Quiz questions</Link></h1>
        </div>
    )
}

export default QuizList