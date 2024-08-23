import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timersCtx.isRuning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRuning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
