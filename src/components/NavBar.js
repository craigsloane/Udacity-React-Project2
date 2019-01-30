import React, {Component} from 'react'
import {connect} from 'react-redux'
import {unsetAuthedUser} from '../actions/authedUser'
import {NavLink, withRouter} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import BackButton from './BackButton'

class NavBar extends Component {
  logOutUser = (e) => {
    e.preventDefault()
    this.props.history.push(`/`)
    const {unsetAuthedUser} = this.props
    unsetAuthedUser()

  }

  render() {
    const {authedUser, user} = this.props
    return (<div className="navbar">
      <div className="navUser">
        <p>{user.name}</p>
        <img src={user.avatarURL}/>
      </div>
      <NavLink to={`/add`}>
        <div className="btn">New Question</div>
      </NavLink >
      <NavLink to={`/leaderboard`}>
        <div className="btn">
          Leaderboard
        </div>
      </NavLink>
      <div className="btn" onClick={this.logOutUser}>Logout
      </div>
      <NavLink to={`/`}>
        <div className="btn">
          Home
        </div>
      </NavLink>
    </div>)
  }
}

function mapStateToProps({authedUser, users}) {
  let user = users[authedUser]
  return {authedUser, user}
}

export default withRouter(connect(mapStateToProps,{unsetAuthedUser})(NavBar))
