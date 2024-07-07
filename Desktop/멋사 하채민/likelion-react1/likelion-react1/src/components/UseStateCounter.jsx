import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("머쨍이사자"); //초기화는 꼭 useState다.
  return (
    <div>
      <div>
        <p>클릭 {count}번 함</p>
        <button onClick={() => setCount(count + 1)}>누르삼</button>
      </div>

      <div>
        <h1>안녕하세요{name}입니다.</h1>
        <button
          onClick={() =>
            setName(name === "머쨍이사자" ? "안머쨍이사자" : "머쨍이사자")
          }
        >
          이름변경
        </button>
      </div>
    </div>
  );
}

export default UseStateCounter;
