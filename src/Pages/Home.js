import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Welcome from "../Components/Welcome";
import AddPerson from "../Components/AddPerson";
import BjjClass from "../Components/BjjClass";

const initialClasses = [
  {
    id: crypto.randomUUID(),
    name: "De-La Riva, Spider Guard Pass",
    description:
      "In todays workout we trained a delariva spider guard pass, where the person trying to pass the guard catches the spider guard leg and moves in its direction. He cleans the leg with his adjacent leg and proceeds to put the opponent's leg between his two legs, squeezing. Grips are changed to hip and collar grip. Then a backstep is performed, where the head of the attacker is placed on the belly of the opponent and the attacker's outer knee touches the ground. Then the hip touches the ground as well, while pulling with both hands. A hip escape is performed to get the legs out. Then the attacker advances to side control.",
    date: new Date(2024, 3, 13),
  },
  {
    id: crypto.randomUUID(),
    name: "Some other workout",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    date: new Date(2024, 3, 13),
  },
  {
    id: crypto.randomUUID(),
    name: "No gi workout",
    description:
      "Gi and no Gi are the two forms of Brazilian Jiu-Jitsu. Gi Jiu-Jitsu is grappling with the use of a traditional Gi, which allows you to grab the clothing of your opponent. No Gi is grappling without the traditional uniform, instead you wear shorts and a rash guard. In no Gi you cannot grab your opponent's clothing",
    date: new Date(2024, 4, 14),
  },
  {
    id: crypto.randomUUID(),
    name: "Gi workout",
    description:
      'BJJ has traditionally been performed and practiced in the "GI", the heavy martial arts uniform also known as a kimono',
    date: new Date(2024, 4, 12),
  },
];

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [showClass, setShowClass] = useState(false);
  const [bjjClasses, setbjjClasses] = useState(initialClasses);
  const [selctedBjjClass, setselctedBjjClass] = useState(null);
  const [showAddClass, setShowAddClass] = useState(false);
  const [showAddPerson, setShowAddPerson] = useState(false);

  function handleSetDate(date) {
    setDate(date.toLocaleDateString());
    setShowClass(true);
    setselctedBjjClass(null);

    bjjClasses.map((bjjClass) => {
      if (
        bjjClass.date.getDay() === date.getDay() &&
        bjjClass.date.getMonth() === date.getMonth() &&
        bjjClass.date.getFullYear() === date.getFullYear()
      ) {
        setselctedBjjClass(bjjClass);
      }
    });
  }

  function handleAddClassOnButtonClick() {
    setShowAddClass(!showAddClass);
  }

  function handleAddPersonButtonClick() {
    setShowAddPerson(!showAddPerson);
  }

  function handleAddClass(newClass) {
    setbjjClasses((bjjClasses) => [...bjjClasses, newClass]);
    setShowAddClass(false);

    console.log(bjjClasses);
  }

  return (
    <div className="app">
      <Welcome></Welcome>
      <DatePicker
        className="datepicker"
        selected={date}
        onChange={(date) => handleSetDate(date)}
      ></DatePicker>

      {selctedBjjClass ? (
        <BjjClass
          showClass={showClass}
          selctedBjjClass={selctedBjjClass}
        ></BjjClass>
      ) : (
        <p>No BJJ Class available for this date.</p>
      )}

      <Button onClick={handleAddPersonButtonClick} className="button btn">
        {showAddPerson ? "Close" : "Add Person"}
      </Button>
      {showAddPerson && <AddPerson></AddPerson>}

      <Button onClick={handleAddClassOnButtonClick} className="button btn">
        {showAddClass ? "Close" : "Add Class"}
      </Button>
      {showAddClass && (
        <AddClass
          onAddClass={handleAddClass}
          onButtonClick={handleAddClassOnButtonClick}
        >
          {showAddClass}
        </AddClass>
      )}
    </div>
  );
}

function AddClass({ onAddClass }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  function handleOnSubmit(e) {
    e.preventDefault();

    console.log(e);
    const id = crypto.randomUUID();

    const newClass = {
      id,
      title,
      description,
      date: new Date(date),
    };

    onAddClass(newClass);

    setTitle("");
    console.log(e.target);
  }

  return (
    <div>
      <form className="form" onSubmit={handleOnSubmit}>
        <label>BJJ Class Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>BJJ Class Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <label>BJJ Class Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>

        <Button onClick={handleOnSubmit}>Add</Button>
      </form>
    </div>
  );
}
