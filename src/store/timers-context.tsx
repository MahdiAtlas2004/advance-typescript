import { createContext } from "react";

// these are the types of the data object.
type Timer = {
  name: string;
  duration: number;
};

// these are the types of values that context will contain.
type TimersState = {
  isRuning: boolean;
  timers: Timer[];
};

// these are the types of methods that should be managed by context.
// over all this merged object is the thing that is accessible across the application and let the other components to interact with data.
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void,
  startTimers: () => void,
  stopTimers: () => void,
};

// This is the basic object that create a context which then let us use our data across the application.
const TimersContext = createContext<TimersContextValue | null>(null);
