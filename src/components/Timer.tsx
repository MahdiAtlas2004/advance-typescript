import Container from "./UI/Container.tsx";
import {
  useTimersContext,
  type Timer as TimerProps,
} from "../store/timers-context.tsx";
import { useEffect, useRef, useState } from "react";

export default function Timer({ name, duration }: TimerProps) {
  // the generic type tell the typescript that at first the value of useRef is null but eventually it's a number.
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRuning } = useTimersContext();

  // stoping timer when it reaches zero
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  // Without useEffect the setInterval function will run every time the state change again and it cause an infinite loop there for we use useEffect to prevent this behavior.
  useEffect(() => {
    let timer: number;
    if (isRuning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);
      // this will store the value of interval before cleaning it.
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    // if a useEffect going to return something it should be a function.
    return () => clearInterval(timer);
  }, [isRuning]);

  // converting mili second to second.
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
