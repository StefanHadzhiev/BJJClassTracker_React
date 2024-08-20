import Accordion from "react-bootstrap/Accordion";

export default function BjjClass({ showClass, selctedBjjClass }) {
  return (
    <Accordion disabled={showClass} defaultActiveKey="0">
      {
        <Accordion.Item eventKey={selctedBjjClass.id}>
          <Accordion.Header>
            {selctedBjjClass.name + " " + selctedBjjClass.date}
          </Accordion.Header>
          <Accordion.Body>{selctedBjjClass.description}</Accordion.Body>
        </Accordion.Item>
      }
    </Accordion>
  );
}
