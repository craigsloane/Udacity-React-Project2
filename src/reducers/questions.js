import {RECIEVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER} from '../actions/types'

export default function users (state = {}, action){
  switch(action.type){
    case RECIEVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      const {question} = action
      return {
        ...state,
        [question.id]: question
      }
    case SAVE_QUESTION_ANSWER :
    const {qid, answer, authedUser} = action
    return{
      ...state,
      [qid]:{
        ...state[qid],
          [answer]:{
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}
