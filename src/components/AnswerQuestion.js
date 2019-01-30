import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from '../actions/questions'
import NavBar from './NavBar'

class AnswerQuestion extends Component {
  answerQuestion = (e, qid, answer) => {
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(handleSaveQuestionAnswer(qid, answer))
  }
  render() {
    const {optionOne, optionTwo, authedUser, id, user} = this.props
    return (<div>
      <NavBar/>
      <div className="main">
        <div className="tile">
          <img src={user.avatarURL}/>
          <p>{`${user.name} asked:`}</p>
          <p>
            <strong>Would you Rather:</strong>
          </p>
          <div>
            <p className="cursor-pointer" onClick={(e) => this.answerQuestion(e, id, 'optionOne')}>{optionOne}</p>
          </div>
          <p>or</p>
          <div>
            <p className="cursor-pointer" onClick={(e) => this.answerQuestion(e, id, 'optionTwo')}>{optionTwo}</p>
          </div>
        </div>
      </div>
    </div>)
  }
}

function mapStateToProps({
  questions,
  authedUser,
  users
}, {id}) {
  const question = questions[id]
  const user = users[authedUser]

  return {id, optionOne: question.optionOne.text, optionTwo: question.optionTwo.text, authedUser, user}
}

export default connect(mapStateToProps)(AnswerQuestion)
