import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionResults from './QuestionResults'
import AnswerQuestion from './AnswerQuestion'
import {Link, withRouter} from 'react-router-dom'

class Question extends Component {

  render() {
    const {question, authedUser, author, answered} = this.props
    return (<Link to={`/questions/${question.id}`}>
      <div className={answered
          ? 'answered ques'
          : 'unanswered ques'
          }>

        <img src={author.avatarURL}/>
        <p>{author.name}
          asked:</p>
        <p>
          <strong>Would you rather:</strong>
        </p>
        <p>{question.optionOne.text}</p>
        <p>or</p>
        <p>{question.optionTwo.text}</p>
      </div>
    </Link>)
  }
}

function mapStateToProps({
  authedUser,
  questions,
  users
}, {id}) {
  const question = questions[id]
  const questionAuthor = question.author
  const author = users[questionAuthor]

  //check if question has been answered
  let answered = false
  const o1 = question.optionOne.votes
  const o2 = question.optionTwo.votes
  if ((o1.includes(authedUser) == true) || (o2.includes(authedUser) == true)) {
    answered = true
  }

  return {question, author, answered}
}

export default withRouter(connect(mapStateToProps)(Question))
