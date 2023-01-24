import { Form, Button, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="display-5 mb-4 text-center p-5">Contact Us</h1>
      <Container>
        <div className="w-50 p-4">
          <Form>
            <Form.Group className="mb-3" controlId="form-label">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-label">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form-label">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Button className="button" variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#edeae1"
          fill-opacity="1"
          d="M0,192L48,208C96,224,192,256,288,234.7C384,213,480,139,576,96C672,53,768,43,864,69.3C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Contact;
