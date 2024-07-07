import { useState, useEffect } from "react";

const UseEffectTimerHW = () => {
  const leftTime = () => {
    const targetDate = new Date(2024, 6, 10, 18, 30, 0);
    const now = new Date();
    const difference = targetDate - now;

    let time = {};

    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), //밀리초->초로바꾸고, ->분->시간으로 변환 , 마지막 일수로 변환!!
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return time;
  };

  const [time, setTime] = useState(leftTime());

  useEffect(() => {
    // useEffect 훅 사용

    const timer = setInterval(() => {
      setTime(leftTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>7월10일 수요일 18시30분까지 남은시간</h1>
      <h2>
        남은시간 :{time.days}일 {time.hours}시간 {time.minutes}분 {time.seconds}
        초
      </h2>
    </div>
  );
};

export default UseEffectTimerHW;
