import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      {/* Setting the polyphormic component as a button we made ourslef. */}
      {/* Now we can set all set the properties that a button can have.  */}
      <Container as={Button}>Click me</Container>
    </main>
  );
}

export default App;
