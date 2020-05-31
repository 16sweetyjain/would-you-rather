
import { _getUsers, _saveQuestion ,_saveQuestionAnswer} from '../_DATA.js';
import { _getQuestions } from '../_DATA.js';
import { getUsers } from './users';
import { getQuestions } from './questions';
import { addUserQuestion, saveUserAnswer } from './users';
import { addQuestion, saveQuestionAnswer } from './questions';


//const AUTHED_ID='tylermcginnis'

export function handleInitialStateForUsers() {
    return (dispatch) => {
        return _getUsers().then((users) => {
            dispatch(getUsers(users))


        })
    }
}

export function handleInitialStateForQuestions() {
    return (dispatch) => {
        return _getQuestions().then((questions) => {
            dispatch(getQuestions(questions))
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addUserQuestion(authedUser, question.id))
            })

    }
}

export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const option=answer

        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => {
            dispatch(saveQuestionAnswer(authedUser, qid, option));
            dispatch(saveUserAnswer(authedUser, qid, option))
        })
    }
}



