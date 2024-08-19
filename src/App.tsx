import { useEffect, useRef } from "react";
import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  // Setting generic type for useRef hook to tell the useRef that this is a ref for an input element.
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
