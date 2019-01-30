import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'
import Question from './Question'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'

class Dashboard extends Component {
  render() {

    const {questionIds, authedUser} = this.props
    return (<div id="dashboard" className="showUnanswered">
      <NavBar/>
      <div className="container">

        <div className="main">
          <div className="ques-btn-container">
            <div className="btn-ans" onClick={() => {
                var el = document.getElementById("dashboard");
                el.classList.remove("showUnanswered")
                el.classList.add("showAnswered")
              }}>
              Answered
            </div>
            <div className="btn-unans" onClick={() => {
                var el = document.getElementById("dashboard");
                el.classList.remove("showAnswered")
                el.classList.add("showUnanswered")
              }}>
              Unanswered
            </div>
          </div>
          <ul>
            {
              questionIds.map((id) => (<li key={id}>
                <Question id={id}/>
              </li>))
            }
          </ul>
        </div>
      </div>
    </div>)
  }
}

function mapStateToProps({questions, users, authedUser}) {
  return {
    questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
