/* eslint-disable */
// warning 없애는 코드

import "./App.css";
import { useState } from "react";

function App() {
  //선언부
  let post = "역삼 우동 맛집";
  let [title, titleChangeFunc] = useState([
    "여자 코트 추천",
    "남성 코트 추천",
    "여성 원피스",
    "추천 코디",
  ]);
  let count = [];
  for (let i = 0; i < title.length; i += 1) {
    count.push(0);
  }

  let modalCount = [];
  for (let i = 0; i < title.length; i += 1) {
    modalCount.push("off");
  }

  let [like, likeFunc] = useState(count);
  let [logo] = useState("React Blog");
  let [modal, setModal] = useState(modalCount);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {/* 
      <button
        style={{
          fontSize: "15px",
          margin: "10px",
        }}
        onClick={() => {
          titleChangeFunc([...title.sort()]);
        }}
      >
        오름차순
      </button>

      <button
        style={{
          fontSize: "15px",
          margin: "10px",
        }}
        onClick={() => {
          titleChangeFunc([
            ...title.sort(function (a, b) {
              if (a < b) return 1;
              if (a > b) return -1;
              if (a === b) return 0;
            }),
          ]);
        }}
      >
        내림차순
      </button>

      <div className="list">
        <h4>{title[0]}</h4>
        <span
          className="like"
          onClick={() => {
            likeFunc(like + 1);
          }}
        >
          좋아요 &nbsp;{like}
        </span>
        <p>3월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <span
          className="changeName"
          onClick={() => {
            원본arr이나 Obj은 원본 그대로 두는 것이 좋음 그래서 카피본을 떠서 쓰는 게 좋음
            let으로 다시 선언을 해도 원본은 그대로고 새로운 변수도 원본을 가리키기 떄문에,
            [...]을 이용해서 새로운 배열을 만들어 달라는 신호를 주어야 함.
            let copyTitleArr = [...title];
            copyTitleArr[1] = "남성 바지 바지 바지";
            titleChangeFunc(copyTitleArr);
          }}
        >
          &nbsp; 👉 이름바꾸기
        </span>
        <p>3월 13일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            if (modal === "off") {
              setModal("on");
            } else {
              setModal("off");
            }
          }}
        >
          {title[2]}
        </h4>
        <p>3월 13일 발행</p>
      </div>
      <h4 className="food" style={{ color: "red", fontSize: "50px" }}>
        {post}
      </h4>

      el을 바로 넣어도 되고, 두 번째 인자를 넣어 갯수를 넣어줘도 된다. */}
      {title.map(function (el, num) {
        return (
          <div className="list" key={num}>
            <h4
              onClick={() => {
                if (modal[num] === "off") {
                  let copy1 = [...modal];
                  copy1[num] = "on";
                  setModal(copy1);
                } else {
                  let copy2 = [...modal];
                  copy2[num] = "off";
                  setModal(copy2);
                }
              }}
            >
              {el}
            </h4>
            <span
              className="like"
              onClick={() => {
                let copy = [...like];
                copy[num] += 1;
                likeFunc(copy);
              }}
            >
              좋아요 &nbsp;{like[num]}
            </span>
            <p>3월 13일 발행</p>
          </div>
        );
      })}

      {title.map((el, num) => {
        return (
          // 리액트에서 조건문은 3항 연산자로 가능
          modal[num] === "on" ? (
            <Modal1 key={num} color="gray" titleArr={title[num]} />
          ) : null
        );
      })}
    </div>
  );
}

//props문법 => App 컴포넌트 안에 있는 내가 만든 컴포넌트에 state를 넣고 싶을 때 씀
//내가 만든 컴포넌트 괄호 옆에 작명={state명} 이렇게 구성해서 받고 싶은 state 정하고
//App 밖에 있는 컴포넌트에 매개변수를 넣어 줌 보통 props라고 넣음.
//그리고 props.작명[넘버] 이렇게해서 App안에 있는 state에서 자료 뽑아옴
//부모가 자식에게만 줘야함
function Modal1(props) {
  return (
    <div className="modal" style={{ backgroundColor: props.color }}>
      <h4>{props.titleArr}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button
        onClick={() => {
          let copy = [...props.titleArr];
          copy[0] = "남남남남남";
          props.titleSet(copy);
        }}
      >
        글 수정
      </button> */}
    </div>
  );
}

//컴포넌트는 병렬구조가 안됨.
//그럼에도 병렬구조가 필요하다 싶음 <>, </> 이렇게 묶어줄 수 있다.
//아래는 병렬구조예시
// function Modal1() {
//   return (
//     <>
//       <div className="modal">
//         <h4>제목</h4>
//         <p>날짜</p>
//         <p>상세내용</p>
//       </div>
//       <div></div>
//     </>
//   );
// }

export default App;
