import "./index.css";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-logo-container">
          <div className="header-logo"></div>
        </div>
        <div className="header-navbar">
          <ul className="header-ul">
            <MenuItem item="Features"></MenuItem>
            <MenuItem item="Team"></MenuItem>
            <MenuItem item="Sign In"></MenuItem>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
