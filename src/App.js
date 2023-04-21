import styled from "styled-components";

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

function App() {
  return (
    <>
      <StHeader>
        <StHeaderSpan>Todos의 제목을 입력하세요</StHeaderSpan>
        <StHeaderInput type="text" />
        <StHeaderBtn>추가하기</StHeaderBtn>
      </StHeader>

      <StBody>
        <StBodyTodo>react를 배워봅시다</StBodyTodo>
        <StBodyTodo>redux를 배워봅시다</StBodyTodo>
      </StBody>
    </>

  );
}

export default App;
