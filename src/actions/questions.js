import {saveQuestion} from '../utils/api'
import {saveQuestionAnswer} from '../utils/api'

import {RECIEVE_QUESTIONS} from './types'
import {ADD_QUESTION} from './types'
import {SAVE_QUESTION_ANSWER} from './types'

export function recieveQuestions(questions){
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question){
  return{
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(optionOneText,optionTwoText){
  return (dispatch, getState) => {
    const {authedUser} = getState()
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    })
      .then((question)=>dispatch(addQuestion(question)))

  }
}

function saveUserAnswer(qid, answer, authedUser){
  return{
    type: SAVE_QUESTION_ANSWER,
    qid,
    answer,
    authedUser,
  }
}

export function handleSaveQuestionAnswer(qid, answer){
  return (dispatch, getState) => {
    const {authedUser} = getState()
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then((info)=>dispatch(saveUserAnswer(qid, answer, authedUser)))

  }
}
