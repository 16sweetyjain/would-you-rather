export function users(state = {}, action) {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                ...action.payload
            }

        case 'ADD_USER_QUESTION':
            return {
                ...state,
                [action.authedUser]:
                {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.qid])
                }
            }

        case 'SAVE_USER_ANSWER':
            const { authedUser, qid, option } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: option
                    }
                }
            }

        default: return state
    }
}