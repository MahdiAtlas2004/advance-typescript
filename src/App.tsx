import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      {/* Setting the polyphormic component as a button we made ourslef. */}
      <Container as={Button} />
    </main>
  );
}

export default App;
