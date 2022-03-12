import { ADD_TODO, DELETE_ALL_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from "./constants"

const initState = {
    todos: [],
    inputTodo: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return { ...state, inputTodo: action.payload }

        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }

        case DELETE_TODO:
            const newTodos = [...state.todos]

            newTodos.splice(action.payload, 1)

            return { ...state, todos: newTodos }
        case EDIT_TODO:
            const todosUpdate = [...state.todos]
            todosUpdate[action.index] = action.payload

            return { ...state, todos: todosUpdate }
        case DELETE_ALL_TODO:
            return { ...state, todos: [] }
        default:
            throw new Error('Invalid action')
    }
}
export { initState }
export default reducer