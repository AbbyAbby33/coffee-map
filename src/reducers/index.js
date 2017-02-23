export default(state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'INCREMENT10':
            return state + 10
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
