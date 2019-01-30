import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import AnswerQuestion from './AnswerQuestion'
import QuestionResults from './QuestionResults'
import PageNotFound from './PageNotFound'
import {Redirect} from 'react-router-dom'

class QuestionPage extends Component {

  render() {
    const {authedUser, question_id, answered, idFound} = this.props
    if  (idFound == false) {
      return (<PageNotFound />)
    }
    return (<div>
      {
        answered === true
          ? <QuestionResults id={question_id}/>
          : <AnswerQuestion id={question_id}/>
      }
    </div>)
  }
}

function mapStateToProps({
  authedUser,
  questions
}, props) {
  const {question_id} = props.match.params
  const question = questions[question_id]

  const idFound = question ? true : false

  if (idFound ==false){
    return{
      idFound,
    }
  }

  let answered = false
  const o1 = question.optionOne.votes
  const o2 = question.optionTwo.votes
  if ((o1.includes(authedUser) == true) || (o2.includes(authedUser) == true)) {
    answered = true
  }

  return {authedUser, question_id, answered}
}

export default connect(mapStateToProps)(QuestionPage)
