import React from 'react'
import styled from "styled-components";
import { addTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function TodoInput() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    // input 내보내주기
    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const onChangeContentHandler = (e) => {
        setContent(e.target.value)
    }

    // 추가하기 버튼 눌렀을 때
    const addTodoBtnHandler = () => {
        if (title === '' || content === '') return alert('Todos를 입력하세요')

        dispatch(addTodo(
            {
                id: Math.floor(Math.random() * 100),
                title: title,
                content: content,
                done: false
            }
        ))
        setTitle('')
        setContent('')
    }
    return (
        <>
            <StHeader>
                <StHeaderTitle>My TodoList</StHeaderTitle>
            </StHeader>
            <StInputBox>
                제목<StHeaderInputTitle type="text" value={title}
                    onChange={onChangeTitleHandler} />
                내용<StHeaderInputContent type="text" value={content}
                    onChange={onChangeContentHandler} />
                <StHeaderBtn onClick={addTodoBtnHandler}>추가하기</StHeaderBtn>
            </StInputBox>
        </>
    )
}

const StHeader = styled.div`
width: 1200px;
height: 100px;
margin: auto;
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
height: 40px;
border-radius: 10px;
border: none;
margin-left: 10px;
font-weight: bold;
`

export default TodoInput