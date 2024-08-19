import { useEffect, useRef } from "react";
import Input from "./components/Input";

function App() {
  // Setting generic type for useRef hook to tell the useRef that this is a ref for an input element.
  const input = useRef<HTMLInputElement>(null);

return (
    <main>
      <Input label="first" id="test" ref={input} />
    </main>
  );
}

export default App;
