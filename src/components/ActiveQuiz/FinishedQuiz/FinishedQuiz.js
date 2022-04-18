import React from 'react'
import Button from '../../UI/Button/Button'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
    const filter = props.quiz.filter((quizItem, index) => {
        return props.results[quizItem.id] === 'success'
    })

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}. </strong>
                            {quizItem.question}

                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>

            <p>Right answers {filter.length} in {props.quiz.length}</p>

            <div>
                <Button
                    onClick={props.onRetry}
                    type="primary">
                    Retry
                </Button>

                <Button
                    type="success">
                    Go to list of questions
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz