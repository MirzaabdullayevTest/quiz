import React, { useState } from 'react'
import classes from './QuizCreater.module.css'
import Button from '../../components/UI/Button/Button'
import formFramework from '../../formFramework/formFrames'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function optionControls(number) {
    return formFramework({
        label: `Option ${number}`,
        errorMessage: 'Error please input a option field'
    }, { required: true })
}

function formControlsField() {
    return {
        question: formFramework(
            {
                label: 'Input a question',
                errorMessage: 'Error please input a question'
            },
            { required: true }
        ),
        option1: optionControls(1),
        option2: optionControls(2),
        option3: optionControls(3),
        option4: optionControls(4),
    }
}

const QuizCreater = () => {
    const [state, setState] = useState({
        quiz: [],
        formControls: formControlsField(),
        rightAnswerId: 1
    })

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const addQuizHandler = (e) => {
        e.preventDefault()
    }

    const createQuizHandler = (e) => {
        e.preventDefault()
    }

    const onChangeHandler = (value, controlName) => {
        console.log(controlName, value);
    }

    const selectHandler = (e) => {
        // console.log(e.target.value);
        setState({
            ...state,
            rightAnswerId: +e.target.value
        })
    }



    function renderInputs() {
        return Object.keys(state.formControls).map(
            (controlName, index) => {
                const control = state.formControls[controlName]

                return (
                    <Auxiliary key={controlName + index}>
                        <Input
                            key={controlName + index}
                            type={control.type}
                            value={control.value}
                            onChange={event => onChangeHandler(event.target.value, controlName)}
                            valid={control.valid}
                            touched={control.touched}
                            errorMessage={control.errorMessage}
                            label={control.label}
                            shouldValid={!!control.validation}
                        />
                        {index === 0 ? <hr /> : null}
                    </Auxiliary>
                )
            })
    }

    const select = <Select
        value={state.rightAnswerId}
        onChange={selectHandler}
        options={[
            { text: 1, value: 1 },
            { text: 2, value: 2 },
            { text: 3, value: 3 },
            { text: 4, value: 4 },
        ]}
    />

    return (
        <div className={classes.QuizCreater}>
            <div>
                <h1>QuizCreater</h1>

                <form onSubmit={submitHandler}>
                    {renderInputs()}

                    {select}

                    <Button
                        type="primary"
                        onClick={addQuizHandler}
                        disabled={true}
                    >
                        Add quiz
                    </Button>

                    <Button
                        type="success"
                        onClick={createQuizHandler}
                        disabled={true}
                    >
                        Create test
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default QuizCreater