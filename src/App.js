/* eslint-disable */
// 워닝 없애는 코드

import "./App.css";
import { useState } from "react";

function App() {
  //선언부
  let post = "역삼 우동 맛집";
  let [title, titleChangeFunc] = useState([
    "여자 코트 추천",
    "남성 코트 추천",
    "여성 원피스",
  ]);
  let [like, likeFunc] = useState(0);
  let [logo] = useState("React Blog");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button
        style={{
          position: "relative",
          left: "-470px",
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
          position: "relative",
          left: "-475px",
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
        <h4>
          {title[0]}
          <span
            className="like"
            onClick={() => {
              likeFunc(like + 1);
            }}
          >
            좋아요
          </span>
          {like}
        </h4>
        <p>3월 13일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]}
          <span
            className="changeName"
            onClick={() => {
              //원본arr이나 Obj은 원본 그대로 두는 것이 좋음 그래서 카피본을 떠서 쓰는 게 좋음
              //let으로 다시 선언을 해도 원본은 그대로고 새로운 변수도 원본을 가리키기 떄문에,
              //[...]을 이용해서 새로운 배열을 만들어 달라는 신호를 주어야 함.
              let copyTitleArr = [...title];
              copyTitleArr[1] = "남성 바지 바지 바지";
              titleChangeFunc(copyTitleArr);
            }}
          >
            &nbsp; 👉 이름바꾸기
          </span>
        </h4>
        <p>3월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3월 13일 발행</p>
      </div>
      <h4 className="food" style={{ color: "red", fontSize: "50px" }}>
        {post}
      </h4>

      <Modal1></Modal1>
    </div>
  );
}

function Modal1() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
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
