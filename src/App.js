/* eslint-disable */
// 워닝 없애는 코드

import "./App.css";
import { useState } from "react";

function App() {
  //선언부
  let post = "역삼 우동 맛집";
  let [title] = useState(["여자 코트 추천", "남성 코트 추천", "여성 원피스"]);
  let [like, likeFunc] = useState(0);
  let [logo] = useState("React Blog");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
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
        <h4>{title[1]}</h4>
        <p>3월 13일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3월 13일 발행</p>
      </div>
      <h4 className="food" style={{ color: "red", fontSize: "50px" }}>
        {post}
      </h4>
    </div>
  );
}

export default App;
