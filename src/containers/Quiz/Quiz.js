import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Toshkentdan oldin qaysi shahar poytaxt bo`lgan?',
                rightAnswerId: 1,
                answers: [
                    { text: 'Samarqand', id: 1 },
                    { text: 'Termiz', id: 2 },
                    { text: 'Navoiy', id: 3 },
                    { text: 'Shaxrisabz', id: 4 },
                ]
            }
        ],
        hasError: null
    }

    onAnswerClick = (answerId) => {
        console.log(this.state.quiz[0].rightAnswerId === answerId);
    }
    
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                    <h1>Quiz list</h1>

                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                        question={this.state.quiz[0].question}
                        onClick={this.onAnswerClick}
                        hasError={this.state.hasError}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz
