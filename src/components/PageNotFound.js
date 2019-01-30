import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import BackButton from './BackButton'

class PageNotFound extends Component {
  render() {
    return (<div className="flex col pageNotFound">
      <p>Page Not Found</p>
      <BackButton/>
    </div>)
  }
}

export default PageNotFound
