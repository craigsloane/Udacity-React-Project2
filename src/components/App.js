import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Question from './Question'
import QuestionPage from './QuestionPage'
import PageNotFound from './PageNotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authedUser} = this.props
    return (<Router>
      <Fragment>

        <div>
          <Switch>
            <Route path='/' exact="exact" component={authedUser
                ? Dashboard
                : Login}/>
            <Route path='/leaderboard' exact="exact" component={authedUser
                ? Leaderboard
                : Login}/>
            <Route path='/add' exact="exact" component={authedUser
                ? NewQuestion
                : Login}/>
            <Route path='/questions/:question_id' component={authedUser
                ? QuestionPage
                : Login}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>

      </Fragment>
    </Router>)
  }
}

function mapStateToProps({authedUser}) {
  return {authedUser}
}

export default connect(mapStateToProps)(App);
