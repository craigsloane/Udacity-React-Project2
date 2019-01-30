import {SET_AUTHED_USER} from './types'
import {UNSET_AUTHED_USER} from './types'

export function setAuthedUser(id){
  return{
    type: SET_AUTHED_USER,
    id,
  }
}

export function unsetAuthedUser(questions,users){
  return{
    type: UNSET_AUTHED_USER,
    questions,
    users,
  }
}
