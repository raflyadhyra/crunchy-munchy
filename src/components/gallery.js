import { Container } from "react-bootstrap";
import basrengImages from "../assets/images/basreng.jpg";
import cimolImages from "../assets/images/cimol.jpg";
import kripcaImages from "../assets/images/kripca.jpg";

const Gallery = () => {
  return (
    <section className="gallery text-center" id="gallery">
      <h1 className="display-5 mb-0 p-5">Gallery</h1>
      <Container>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={basrengImages} alt="gallery1" class="card-img-top" width="300" />
              <div class="card-body">
                <p class="card-text">Basreng crunchy munchy adalah camilan khas Sunda yang terbuat dari olahan bakso ikan yang diiris tipis kemudian digoreng. Basreng dapat juga disajikan dengan taburan bumbu pedas dan daun jeruk.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={cimolImages} alt="gallery1" class="card-img-top" width="300" />{" "}
              <div class="card-body">
                <p class="card-text">
                  Molring merupakan singkatan dari cimol kering. Sesuai dengan namanya molring berasal dari bahan baku cimol yaitu tepung kanji yang dibumbui kemudian diiris tipis dan digoreng hingga kering ditambah taburan daun jeruk.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img src={kripcaImages} alt="gallery1" class="card-img-top" width="300" />{" "}
              <div class="card-body">
                <p class="card-text">
                  Kripca crunchy munchy merupakan kripik yang terbuat dari singkong yang diiris tipis-tipis dan proses pemasakannya menggunakan pemanggangan dioven sehingga membuat singkong mempunyai tekstur kriuk seperti kaca kemudian
                  dinamakan kripca
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E9C261"
          fill-opacity="1"
          d="M0,192L48,208C96,224,192,256,288,234.7C384,213,480,139,576,96C672,53,768,43,864,69.3C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Gallery;
