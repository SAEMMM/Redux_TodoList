import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./redux/modules/todos";

function App() {
  const [title, setTitle] = useState('')

  const onChangeHandler = (e) => {
    const { value } = e.target
    setTitle(value)
  }

  // const addStore = useSelector((state) => state)
  // console.log('store조회', addStore) //store가 잘 연결되었는지 확인

  // dispatch 함수 선언
  const dispatch = useDispatch()

  // state값 확인하기
  const todos = useSelector((state) => state.addTodo.todos)
  console.log('todos', todos)

  // 추가하기 버튼 눌렀을 때
  const addTodoBtnHandler = () => {
    if(title === '') return alert('Todos의 제목을 입력하세요')

    dispatch(addTodo(
      {
        id: todos.length + 1,
        title
      }
    ))
  }

  return (
    <>
      <StHeader>
        <StHeaderSpan>Todos의 제목을 입력하세요</StHeaderSpan>
        <StHeaderInput type="text"
          onChange={onChangeHandler} />
        <StHeaderBtn onClick={addTodoBtnHandler}>추가하기</StHeaderBtn>
      </StHeader>

      <StBody>
        {todos.map((todo) => (
          <StBodyTodo key={todo.id}>{todo.title}</StBodyTodo>
        ))}
      </StBody>
    </>

  );
}

export default App;

// styled-components
const StHeader = styled.div`
  height: 100px;
  margin-top: 10px;
  text-align: center;
  line-height: 100px;
`
const StHeaderSpan = styled.span`
  font-weight: bold;
`

const StHeaderInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-left: 10px;
`

const StHeaderBtn = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: none;
  margin-left: 10px;
  font-weight: bold;
`

const StBody = styled.div`
  
`

const StBodyTodo = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  float: left;
  box-sizing: border-box;
  padding: 10px;
`