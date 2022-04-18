import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizList from './containers/QuizList/QuizList'
import QuizCreater from './containers/QuizCreater/QuizCreater'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/quizcreator' element={<QuizCreater />} />
          <Route path='/quiz/:id' element={<Quiz />} />
          <Route path='/' element={<QuizList />} />
        </Routes>
      </Layout>
    )
  }
}

export default App
