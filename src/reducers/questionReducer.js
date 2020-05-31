export function questions(state = {}, action) {
    switch (action.type) {
        case 'GET_QUESTIONS':
            return {
                ...state,
                ...action.payload
            };

        case 'ADD_QUESTION':
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case 'SAVE_QUESTION_ANSWER':
            const { authedUser, qid, option } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [option]: {
                        ...state[qid][option],
                        votes: state[qid][option].votes.concat([authedUser])
                    }
                }
            }

        default: return state;
    }
}
