import logoImages from "../assets/images/logo.png";

const Jumbotron = () => {
  return (
    <section className="jumbotron text-center" id="home">
      <img src={logoImages} alt="APMH" width="400" />
      <h1 className="display-4 mt-5">CRUNCHY MUNCHY</h1>
      <p className="lead">Aneka Snack Enak dan Renyah</p>
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

export default Jumbotron;
