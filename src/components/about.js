import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section className="about text-center" id="about">
      <h1 className="display-5 p-5">About Us</h1>
      <Container>
        <Row className="justify-content-center fs-5">
          <Col>
            <p className="mb-4 w-75 p-3 ms-5">Crunchy Munchy adalah bisnis UMKM di bidang Makanan Cemilan yang didirikan oleh 4 orang mahasiswa. Harga dari snack ini murah dan ramah di kantong. </p>
          </Col>
          <Col>
            <p className="mb-4 w-75 p-3 ms-5">Crunchy Munchy menjual berbagai macam aneka snack yang dipacking dalam kemasan plastik dengan zipper agar mudah dikonsumsi.</p>
          </Col>
        </Row>
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

export default About;
