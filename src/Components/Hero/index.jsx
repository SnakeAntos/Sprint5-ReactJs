import "./index.css";

const Hero = (props) => {
  let imgClass = "hero-img1";
  //aqui si pongo img1, img2 o img3 se cambiaria el estilo al correspondiente para cada img, que varia unicamente en la ruta
  //se que no es la manera mas optima de hacerlo pero se me ocurrio para evitar poner un prop con la ruta de la img.
  return (
    <>
      <div className="hero-container">
        <div className="hero-container-inner">
          <div className={imgClass}></div>
          <div className="hero-text-container">
            <h1 className="hero-h1">{props.text}</h1>
            <p className="hero-p">{props.paragraph}</p>
          </div>
          <a className="hero-aButton">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Hero;
