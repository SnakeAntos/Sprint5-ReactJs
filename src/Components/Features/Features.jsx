import "./index.css";

const Features = (props) => {
  //las opciones para las props de la img son:
  // imgClass1(computer icon)
  // imgClass2(security icon)
  // imgClass3(check clock icon)
  // imgClass4(folder icon)

  return (
    <>
      <div className="features-container">
        <div className={`features-icon ${props.imgClass}`}></div>
        <div className="features-text-container">
          <h3 className="features-h3">{props.text}</h3>
          <p className="features-p">{props.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Features;
