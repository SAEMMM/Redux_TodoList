import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, doneTodo, delTodo } from "./redux/modules/todos";
import { Routes, Route, Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

function App() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // const addStore = useSelector((state) => state)
  // console.log('store조회', addStore) //store가 잘 연결되었는지 확인

  // dispatch 함수 선언
  const dispatch = useDispatch()

  // state값 확인하기
  const todos = useSelector((state) => state.addTodo.todos)
  console.log('todos', todos)

  let { id } = useParams()

  return (
    <>
      <Routes>
        <Route path="/"
          element={
            <>
              <MainHeader todos={todos} title={title} setTitle={setTitle}
                content={content} setContent={setContent} dispatch={dispatch} />
              <MainBody todos={todos} dispatch={dispatch} />
            </>} />
        <Route path="/detail/:id" element={<Detail todos={todos} />} />
      </Routes>
    </>
  );
}

export default App;

function Detail(props) {
  let { id } = useParams()
  let todo = props.todos.find((item) => {
    return item.id === parseInt(id)
  })

  return (
    <StDetail>
      <StDetailHeaderP>ID : {todo.id}</StDetailHeaderP>
      <StDetailHeaderBtn><Link to="/">이전으로</Link></StDetailHeaderBtn>
      <StFloatNone />
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
    </StDetail>
  )
}

function MainHeader(props) {
  // input 내보내주기
  const onChangeTitleHandler = (e) => {
    const { value } = e.target
    props.setTitle(value)
  }

  const onChangeContentHandler = (e) => {
    const { value } = e.target
    props.setContent(value)
  }

  // 추가하기 버튼 눌렀을 때
  const addTodoBtnHandler = () => {
    if (props.title === '' || props.content === '') return alert('Todos를 입력하세요')

    props.dispatch(addTodo(
      {
        id: props.todos.length + 1,
        title: props.title,
        content: props.content,
        done: false
      }
    ))
  }
  return (
    <>
      <StHeader>
        <StHeaderTitle>My TodoList</StHeaderTitle>
      </StHeader>
      <StInputBox>
        제목<StHeaderInputTitle type="text"
          onChange={onChangeTitleHandler} />
        내용<StHeaderInputContent type="text"
          onChange={onChangeContentHandler} />
        <StHeaderBtn onClick={addTodoBtnHandler}>추가하기</StHeaderBtn>
      </StInputBox>
    </>
  )
}

function MainBody(props) {
  // 삭제하기 버튼 눌렀을 때
  const delTodoBtnHandler = (id) => {
    props.dispatch(delTodo(id))
  }

  // 완료 버튼 눌렀을 때
  const doneTodoBtnHandler = (id) => {
    props.dispatch(doneTodo(id))
  }
  return (
    <StBody>
      <StBodyWorking>Working.. 🔥</StBodyWorking>
      {props.todos.map((todo) => {
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
      {props.todos.map((todo) => {
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

// styled-components
const StHeader = styled.div`
  height: 100px;
  margin-top: 10px;
  text-align: center;
  background-color: SlateGrey;
`
const StHeaderTitle = styled.h1`
  text-align: center;
  line-height: 100px;
  margin-left: 20px;
  color: white;
`
const StInputBox = styled.div`
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`

const StHeaderInputTitle = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid Gainsboro;
  margin-left: 5px;
  margin-right: 20px;
`
const StHeaderInputContent = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid Gainsboro;
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

const StDetail = styled.div`
  box-sizing: border-box;
  margin: auto;
  width:600px;
  height: 400px;
  padding: 20px;
  border: 2px solid Gainsboro;
  border-radius: 10px;
`

const StDetailHeaderP = styled.p`
  float: left;
`

const StDetailHeaderBtn = styled.button`
  float: right;
`
const StFloatNone = styled.div`
  clear: both;
`
