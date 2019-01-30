import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import PercentageBar from './PercentageBar'

class QuestionResults extends Component {

  render() {

    const {
      question,
      optionOne,
      optionTwo,
      optionOneAnsNo,
      optionTwoAnsNo,
      optionOneAnsPer,
      optionTwoAnsPer,
      totalAns,
      userAns,
      user
    } = this.props
    return (<div>
      <NavBar/>
      <div className="main">
        <div className="tile">
          <div className="flex col">
            <img src={user.avatarURL}/>
            <p>{`${user.name} asked:`}</p>
            <p>
              <strong>Would you Rather:</strong>
            </p>
          </div>

          <div className={userAns === optionOne
              ? "user-choice option"
              : "option"}>
            <p>{optionOne}</p>
            <p>{`${optionOneAnsNo} out of ${totalAns} users voted for this option`}</p>
            <p>{optionOneAnsPer}%</p>
            <PercentageBar percentage={optionOneAnsPer}/>
            <img src={user.avatarURL}
                  style={{ display: userAns === optionOne ? "block" : "none"}}
            />
          </div>

          <p>
            <strong>OR</strong>
          </p>

          <div className={userAns === optionTwo
              ? "user-choice option"
              : "option"}>
            <p>{optionTwo}</p>
            <p>{`${optionTwoAnsNo} out of ${totalAns} users voted for this option`}</p>
            <p>{optionTwoAnsPer}%</p>
            <PercentageBar percentage={optionTwoAnsPer}/>
            <img src={user.avatarURL}
                  style={{ display: userAns === optionTwo ? "block" : "none"}}
            />
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
  let userAns;
  question.optionOne.votes.forEach((vote) => {
    if (vote === authedUser) {
      userAns = question.optionOne.text
    }
  })
  question.optionTwo.votes.forEach((vote) => {
    if (vote === authedUser) {
      userAns = question.optionTwo.text
    }
  })

  let optionOneAnsNo = question.optionOne.votes.length
  let optionTwoAnsNo = question.optionTwo.votes.length
  let totalAns = optionOneAnsNo + optionTwoAnsNo
  let optionOneAnsPer = Math.round((optionOneAnsNo / totalAns) * 100)
  let optionTwoAnsPer = 100 - optionOneAnsPer

  return {
    question,
    optionOne: question.optionOne.text,
    optionTwo: question.optionTwo.text,
    optionOneAnsNo,
    optionTwoAnsNo,
    optionOneAnsPer,
    optionTwoAnsPer,
    totalAns,
    userAns,
    user
  }

}

export default connect(mapStateToProps)(QuestionResults)
