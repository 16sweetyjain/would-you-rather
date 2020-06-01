



export function getUsers(users) {
    return {
        type: 'GET_USERS',
        payload: users
    }
}

export function addUserQuestion (authedUser, qid) {
    return {
      type: 'ADD_USER_QUESTION',
      authedUser,
      qid
    }
  }

  export function saveUserAnswer(authedUser, qid, option){
    return{
      type:'SAVE_USER_ANSWER',
      authedUser,qid,option
    }
  }

  