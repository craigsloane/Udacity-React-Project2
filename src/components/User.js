import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class User extends Component {
  loginUser = (e) => {
    e.preventDefault()
    const {setAuthedUser, user, id} = this.props
    setAuthedUser(id)
  }
  render() {
    const {user, id} = this.props
    return (<div className="user flex col" onClick={this.loginUser}>
      <p>{user.name}</p>
      <img src={user.avatarURL}/>
    </div>)
  }
}

function mapStateToProps({
  users
}, {id}) {
  const user = users[id]

  return {user}
}

export default connect(mapStateToProps,{setAuthedUser})(User)
