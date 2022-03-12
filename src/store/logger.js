function logger(reducer) {
    return (PrevState, action) => {

        console.group(action.type)
        console.log('Action', action)
        console.log('PrevState', PrevState)

        const newState = reducer(PrevState, action)

        console.log('NewState', newState)
        console.groupEnd()

        return newState
    }
}

export default logger