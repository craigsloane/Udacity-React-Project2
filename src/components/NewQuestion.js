import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import NavBar from './NavBar'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChangeoptionOneText = (e) => {
    const optionOneText = e.target.value
    this.setState(() => ({optionOneText}))
  }
  handleChangeoptionTwoText = (e) => {
    const optionTwoText = e.target.value
    this.setState(() => ({optionTwoText}))
  }
  handleSaveQuestion = (e) => {
    e.preventDefault()
    const {dispatch, authedUser} = this.props
    const {optionOneText, optionTwoText, toHome} = this.state
    let author = authedUser
    dispatch(handleAddQuestion(optionOneText, optionTwoText,))
    this.setState(() => ({toHome: true}))
  }
  render() {
    const {optionOneText, optionTwoText, toHome} = this.state
    const {authedUser} = this.props
    if (toHome === true) {
      return <Redirect to='/'/>
    }
    return (<div>
      <NavBar/>
      <div className="main">
        <div className="flex col add">
          <h3>Would you rather?</h3>
          <form className="flex col">
            <input placeholder="Option 1" value={optionOneText} onChange={this.handleChangeoptionOneText} className="option"/>
            <p>OR</p>
            <input placeholder="Option 2" value={optionTwoText} onChange={this.handleChangeoptionTwoText} className="option"/>
            <button className="btn" onClick={this.handleSaveQuestion} disabled={optionOneText === '' || optionTwoText === '' || optionOneText === optionTwoText}>
              Submit</button>
          </form>
        </div>
      </div>
    </div>)
  }
}

function mapStateToProps({
  questions
}, {authedUser}) {
  return {questions, authedUser}
}

export default connect(mapStateToProps)(NewQuestion)
