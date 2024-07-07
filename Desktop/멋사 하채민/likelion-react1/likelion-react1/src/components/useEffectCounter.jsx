import { useState, useEffect } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`렌더링 완료! count의 값은 ${count}입니다.`);
  }); //렌더링 끝난 후 실행됨.
  return (
    <>
      <p>{count}번 클릭</p>
      <button onClick={() => setCount(count + 1)}>
        이건 useEffet활용한 카운더당 눌러봥
      </button>
    </> //클릭이벤트가 발생했을 때 setCount불러와서 현재 count 수에 1더함
  );
}

export default UseEffectCounter;
