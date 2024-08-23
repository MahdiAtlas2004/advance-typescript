import { createContext, useContext, useReducer, type ReactNode } from "react";

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

const initialState: TimersState = {
  isRuning: true,
  timers: [],
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

type Action = {
  type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
};

function timersReducer(state: TimersState, action: Action): TimersState {
  if(action.type === 'START_TIMERS') {
    return {
      ...state,
      isRuning: true
    }
  }
  if(action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRuning: false
    }
  }
  if(action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name,
          duration
        }
      ]
    }
  }
}

// With this special component function we can now wrap other components of our application that then they will be able to access these values.
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [TimersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRuning: false,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER" });
    },
    startTimers() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  // Here Provider object needs initial value that's why we are creating ctx object and these values then will be accessible for the other components.
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
