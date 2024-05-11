import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

function App() {
  return (
    <div>
      <Welcome></Welcome>
      <Form.Control className="row-md-12" type="date" />
    </div>
  );
}

function Welcome() {
  return <h3>Welcome to the BJJ Class Tracker!</h3>;
}

export default App;
