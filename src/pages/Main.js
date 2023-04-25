import React from 'react'
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

function Main() {
    return (
        <>
            <TodoInput />
            <TodoList />
        </>
    )
}

export default Main