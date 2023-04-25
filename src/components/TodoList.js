import React from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { doneTodo, delTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function TodoList() {
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos.todos)
    console.log('todos', todos)

    // 삭제하기 버튼 눌렀을 때
    const delTodoBtnHandler = (id) => {
        dispatch(delTodo(id))
    }

    // 완료 버튼 눌렀을 때
    const doneTodoBtnHandler = (id) => {
        dispatch(doneTodo(id))
    }

    return (
        <StBody>
            <StBodyWorking>Working.. 🔥</StBodyWorking>
            {todos.map((todo) => {
                if (!todo.done) {
                    return (
                        <StBodyTodo key={todo.id}>
                            <Link to={`/detail/${todo.id}`}>상세보기</Link>
                            <h3>{todo.title}</h3>
                            <p>{todo.content}</p>
                            <StBodyBtnDiv>
                                <StBodyBtn onClick={() => delTodoBtnHandler(todo.id)} bg='IndianRed'>삭제하기</StBodyBtn>
                                <StBodyBtn onClick={() => doneTodoBtnHandler(todo.id)} bg={todo.done === true ? 'CornflowerBlue' : 'MediumSeaGreen'}>
                                    {todo.done === true ? '다시하기' : '완료'}</StBodyBtn>
                            </StBodyBtnDiv>
                        </StBodyTodo>)
                } else {
                    return null
                }
            })}
            <StBodyDone>Done!! 🍀</StBodyDone>
            {todos.map((todo) => {
                if (todo.done) {
                    return (
                        <StBodyTodo key={todo.id}>
                            <Link to={`/detail/${todo.id}`}>상세보기</Link>
                            <h3>{todo.title}</h3>
                            <p>{todo.content}</p>
                            <StBodyBtnDiv>
                                <StBodyBtn onClick={() => delTodoBtnHandler(todo.id)} bg='IndianRed'>삭제하기</StBodyBtn>
                                <StBodyBtn onClick={() => doneTodoBtnHandler(todo.id)} bg={todo.done === true ? 'CornflowerBlue' : 'MediumSeaGreen'}>
                                    {todo.done === true ? '다시하기' : '완료'}</StBodyBtn>
                            </StBodyBtnDiv>
                        </StBodyTodo>)
                } else {
                    return null
                }
            })}
        </StBody>
    )
}

const StBody = styled.div`
  margin: auto;
  width: 1200px;
`

const StBodyTodo = styled.div`
  width: 300px;
  height: 200px;
  border: 2px solid Gainsboro;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  float: left;
  box-sizing: border-box;
  padding: 20px;
`

const StBodyBtnDiv = styled.div`
  text-align: center;
`

const StBodyBtn = styled.button`
  width: 120px;
  height: 35px;
  margin-left: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.bg};
  color: white;
  font-weight: bold;
`

const StBodyWorking = styled.h2`
  margin-left: 20px;
`

const StBodyDone = styled.h2`
  margin-left: 20px;
  clear: both;
`

export default TodoList