import "./index.css";

const Aside = (props) => {
  return (
    <>
      <div className="aside-container">
        <div className="aside-img-container">
            <div className="aside-img"></div>
        </div>
        <div className="aside-text-container">
            <h2 className="aside-h2-title">
                {props.text}
            </h2>
            <p className="aside-p-paragraph">
                {props.paragraph}
            </p>            
            <p className="aside-p-paragraph">
                {props.paragraph2}
            </p>
            <div className="aside-a-container">
              <a href={`${props.linkFollow}`} className="aside-a-link">
                  {props.link}
              </a>
              <div className="aside-a-circle"></div>
            </div>
        </div>        
      </div>
    </>
  );
};

export default Aside;
