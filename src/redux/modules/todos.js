// action creator (액션객체를 한 곳에서 관리)
const ADD_TODO = 'ADD_TODO'
const DONE_TODO = 'DONE_TODO'
const DEL_TODO = 'DEL_TODO'

// payload : 액션 객체에 담아주는 '목적'
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const doneTodo = (payload) => {
    return {
        type: DONE_TODO,
        payload
    }
}

export const delTodo = (payload) => {
    return {
        type: DEL_TODO,
        payload
    }
}

// 초기 상태값 (useState와 같음)
const initialState = {
    todos: [
        {
            id: 1,
            title: 'react를 배워봅시다',
            content: 'react 기초를 공부해봅시다',
            done: false,
        },
        {
            id: 2,
            title: 'redux를 배워봅시다',
            content: 'redux 기초를 공부해봅시다',
            done: true,
        },
    ],
}

// 리듀서 (변화를 일으키는 함수)
const todos = (state = initialState, action) => {
    console.log('액션', action)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DONE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    } else {
                        return todo
                    }
                })
            }
        case DEL_TODO:
            return {
                ...state,
                todos: state.todos.filter(todos => todos.id !== action.payload)
            }
        default:
            return state
    }
}

export default todos