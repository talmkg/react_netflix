import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="text-center fixed-bottom text-light" id="black">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat
        itaque libero magni id aperiam iusto illum optio consequatur laboriosam
        accusantium obcaecati ducimus, voluptas alias rem quo voluptatem amet
        perspiciatis!
      </Card.Footer>
    </Card>
  );
}

export default Footer;
