import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class BackButton extends Component {
  state = {
    toHome: false
  }
  handleBack = (e) => {
    e.preventDefault()
    this.setState(() => ({toHome: true}))
  }
  render() {
    const {toHome} = this.state
    if (toHome === true) {
      return <Redirect to='/'/>
    }
    return (<div className="btn" onClick={this.handleBack}>
      Home
    </div>)
  }
}

export default BackButton
