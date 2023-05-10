import "./index.css";

const IndividualQuotes = (props) => {
  return (
    //imgClass puede tomar tres estilos
    //imgClass1, ImgClass2. ImgClass3
    <>
      <div className="individualQuotes-container">
        <p className="individualQuotes-p">{props.text}</p>
        <div className="individualQuotes-person-container">
          <div className={`individualQuotes-person-img ${props.imgClass}`}></div>
          <div className="individualQuotes-person-name-container">
            <p className="individualQuotes-p-name">{props.name}</p>
            <p className="individualQuotes-p-position">{props.position}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualQuotes;
