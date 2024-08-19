import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  // We are telling here that useRef should expect a type of FormHandle.
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // We use {as} keyword when we know better the type of something than typescript and with this approach we just annotate this to typescript.
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
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
