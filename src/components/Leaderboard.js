import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from './NavBar'

class Leaderboard extends Component {

  render() {
    console.log(this.props)
    const {userProfiles} = this.props
    return (<div>
      <NavBar/>
      <div className="main">
        {
          userProfiles.map((profile) => (<div className="tile" key={profile.id}>
            <p className="position">{userProfiles.indexOf(profile) + 1}</p>
            <p>{profile.name}</p>
            <img src={profile.avatarURL}/>
            <p>Questions asked: {profile.quesAsked}</p>
            <p>Questions answered: {profile.quesAns}</p>
          </div>))
        }
      </div>
    </div>)
  }
}

function mapStateToProps({users, questions}) {
  const userIds = Object.keys(users)
  const questionIds = Object.keys(questions)

  let userStats = userIds.map((id) => {
    let name = users[id].name
    let avatarURL = users[id].avatarURL
    let quesAsked = 0
    let quesAns = 0
    let score = 0

    questionIds.forEach((questionId) => {
      if (questions[questionId].author === id) {
        quesAsked += 1
      }
      let answers = (questions[questionId].optionOne.votes).concat(questions[questionId].optionTwo.votes)
      answers.forEach((user) => {
        if (user === id) {
          quesAns += 1
        }
      })
      score = quesAsked + quesAns
    })
    return {
      id,
      name,
      avatarURL,
      quesAns,
      quesAsked,
      score
    }
  })

  return {
    userProfiles: userStats.sort((a, b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(Leaderboard)
