import { useState, useEffect } from "react";

const UseEffectTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    // useEffect 훅 사용
    // isRunning 이 true 이면 1초마다 time State 를 1씩 증가
    if (isRunning) {
      const timeoutId = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);

      if (time === 10) {
        setIsRunning(false);
        setTime(0);
        clearTimeout(timeoutId);
      }

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <div>
      {isRunning ? (
        <>
          <h1>Time:{time} 초</h1>
          <h2>남은시간 :{10 - time}</h2>
        </>
      ) : (
        <button onClick={handleStart}>타이머시작</button>
      )}
    </div>
  );
};

export default UseEffectTimer;
