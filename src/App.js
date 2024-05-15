import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

// https://refine.dev/blog/react-date-picker/#select-range-within-one-component

const initialClasses = [
  {
    id: 118836,
    name: "De-La Riva, Spider Guard Pass",
    description:
      "In todays workout we trained a delariva spider guard pass, where the person trying to pass the guard catches the spider guard leg and moves in its direction. He cleans the leg with his adjacent leg and proceeds to put the opponent's leg between his two legs, squeezing. Grips are changed to hip and collar grip. Then a backstep is performed, where the head of the attacker is placed on the belly of the opponent and the attacker's outer knee touches the ground. Then the hip touches the ground as well, while pulling with both hands. A hip escape is performed to get the legs out. Then the attacker advances to side control.",
    date: new Date(2024, 5, 13),
  },
  {
    id: 118837,
    name: "Some other workout",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    date: new Date(2024, 5, 13),
  },
  {
    id: 118838,
    name: "No gi workout",
    description:
      "Gi and no Gi are the two forms of Brazilian Jiu-Jitsu. Gi Jiu-Jitsu is grappling with the use of a traditional Gi, which allows you to grab the clothing of your opponent. No Gi is grappling without the traditional uniform, instead you wear shorts and a rash guard. In no Gi you cannot grab your opponent's clothing",
    date: new Date(2024, 5, 14),
  },
  {
    id: 118839,
    name: "Gi workout",
    description:
      "BJJ has traditionally been performed and practiced in the gi – the heavy martial arts uniform also known as a kimono",
    date: new Date(2024, 5, 12),
  },
];

function App() {
  const [date, setDate] = useState(new Date());
  const [showWorkout, setShowWorkout] = useState(false);
  const [bjjClasses, setbjjClasses] = useState(initialClasses);

  function handleSetDate(date) {
    setDate(date);
    setShowWorkout(true);
    console.log(date);
  }

  return (
    <div>
      <Welcome></Welcome>
      <DatePicker
        selected={date}
        onChange={(date) => handleSetDate(date)}
      ></DatePicker>

      <Button className="button">Add Person</Button>
      <Button className="button">Add Class</Button>

      <BjjClasses
        showWorkout={showWorkout}
        bjjClasses={bjjClasses}
      ></BjjClasses>
    </div>
  );
}

function Welcome() {
  return <h3>Welcome to the BJJ Class Tracker!</h3>;
}

function BjjClasses({ showWorkout, bjjClasses }) {
  return (
    <Accordion disabled={showWorkout} defaultActiveKey="0">
      {bjjClasses.map((bjjClass) => (
        <Accordion.Item eventKey={bjjClass.id}>
          <Accordion.Header>{bjjClass.title}</Accordion.Header>
          <Accordion.Body>{bjjClass.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

// function AccordionItem(title, date, description, key) {
//   return (

//   );
// }

export default App;
