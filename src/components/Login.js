import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from './User'

class Login extends Component {
  render() {
    const {userIds} = this.props;
    return (<div>
      <div className="flex col">
        <h1>Would You Rather</h1>
        <p>Please select a profile from the list below:</p>
      </div>
      <ul>
        {
          userIds.map((id) => (<li key={id}>
            <User id={id}/>
          </li>))
        }
      </ul>
    </div>)
  }
}

function mapStateToProps({users}) {
  return {userIds: Object.keys(users)}
}

export default connect(mapStateToProps)(Login)
