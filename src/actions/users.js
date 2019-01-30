import {RECEIVE_USERS} from './types'

export function recieveUsers (users){
  return {
    type: RECEIVE_USERS,
    users,
  }
}
