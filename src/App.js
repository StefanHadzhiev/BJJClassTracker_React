import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

// https://refine.dev/blog/react-date-picker/#select-range-within-one-component

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Welcome></Welcome>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
      ></DatePicker>
    </div>
  );
}

function Welcome() {
  return <h3>Welcome to the BJJ Class Tracker!</h3>;
}

export default App;
