

export function getQuestions(questions) {
    return {
        type: 'GET_QUESTIONS',
        payload: questions
    }
}

export function addQuestion(question){
    return{
        type:'ADD_QUESTION',
        payload:question
    }
}

export function saveQuestionAnswer(authedUser,qid,option){
    return{
        type:'SAVE_QUESTION_ANSWER',
        authedUser,qid,option
    }
}