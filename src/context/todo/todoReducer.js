import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from "../types"

const handlers = {
    [ADD_TODO]: (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    }),
    [REMOVE_TODO]: (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    }),
    [CHANGE_TODO]: (state, { id, title }) => ({
        ...state,
        todos: state.todos.map(todo => {
            if(todo.id === id){
                todo.title = title
            }

            return todo
        })
    }),
    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}