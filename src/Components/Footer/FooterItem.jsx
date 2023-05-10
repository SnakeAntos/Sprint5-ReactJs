import "./index.css";

const FooterItem = ({icon, text}) => {
  return (
    <>
      <div className="footerItem-container">
        <div className={`footerItem-img ${icon}`}></div>
        <p className="footerItem-p">{text}</p>
      </div>
    </>
  );
};

export default FooterItem;
