import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
    const filter = props.quiz.filter((quizItem, index) => {
        return props.results[quizItem.id] === 'success'
    })

    console.log(filter);

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
                <button onClick={props.onRetry} className={classes.btn}>Retry</button>
            </div>
        </div>
    )
}

export default FinishedQuiz