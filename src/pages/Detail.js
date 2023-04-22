import React from 'react'
import styled from "styled-components";
import { Link, useParams } from 'react-router-dom'
import { useSelector } from "react-redux"

function Detail() {

    const todos = useSelector((state) => state.todos.todos)
    console.log('todos=', todos)

    let { id } = useParams()
    let todo = todos.find((item) => {
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

export default Detail