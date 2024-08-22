import { createContext, useContext, type ReactNode } from "react";

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
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

// This is the basic object that create a context which then let us use our data across the application.
const TimersContext = createContext<TimersContextValue | null>(null);

// we create our own custom hook to use it on the other components that need the context values.
export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  // This will always make sure that the context value is not null.
  if (timersCtx === null) {
    throw new Error("TimersContext is null - that should not be the case!");
  }

  return timersCtx;
}

// This type is for components that will be wraped by TimersContextProvider function.
type TimersContextProviderProps = {
  children: ReactNode;
};

// With this special component function we can now wrap other components of our application that then they will be able to access these values.
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRuning: false,
    addTimer(timerData) {
      //...
    },
    startTimers() {
      //...
    },
    stopTimers() {
      //...
    },
  };
  // Here Provider object needs initial value that's why we are creating ctx object and these values then will be accessible for the other components.
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
