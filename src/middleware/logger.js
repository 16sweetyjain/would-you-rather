const logger = (store) => (next) => (action) => {
    console.group(action.type)

    console.log('the action:', action)
    const returnValue = next(action)
    //const newStore=store.getState()===undefined?null:store.getState()
    console.log('the new state', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger