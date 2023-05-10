import "./index.css";
import FooterItem from "./FooterItem.jsx";
import FooterMenuItem from "./FooterMenuItem.jsx";
import Social from "./Social.jsx"

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="footer-logo"></div>
        </div>
        <div className="footer-inner-container">
          <div className="footer-items-container">
            <FooterItem
              icon="icon1"
              text="Lorem Ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor inncididunt 
                    pikachu et dolore magna aliqua"
            ></FooterItem>
            <div className="footer-items-containerBoth">
              <FooterItem icon="icon2" text="+1-543-123-4567"></FooterItem>
              <FooterItem icon="icon3" text="example@fylo.com"></FooterItem>
            </div>
          </div>
          <div className="footer-menu-container">
          <div className="footer-menu-div">
            <FooterMenuItem
              text="About Us"
              url="aqui iria la url"
            ></FooterMenuItem>
            <FooterMenuItem text="Jobs" url="aqui iria la url"></FooterMenuItem>
            <FooterMenuItem
              text="Press"
              url="aqui iria la url"
            ></FooterMenuItem>
            <FooterMenuItem text="Blog" url="aqui iria la url"></FooterMenuItem>
          </div>
          <div className="footer-menu-div">
            <FooterMenuItem
              text="Contact Us"
              url="aqui iria la url"
            ></FooterMenuItem>
            <FooterMenuItem
              text="Terms"
              url="aqui iria la url"
            ></FooterMenuItem>
            <FooterMenuItem
              text="Privacy"
              url="aqui iria la url"
            ></FooterMenuItem>
          </div>
          <div className="footer-social">
            <Social
            icon = "iconSocialFacebook"
            url= 'facebookUrl'
            ></Social>
            <Social
            icon = "iconSocialTwitter"
            url= 'twitterurl'
            ></Social>
            <Social
            icon = "iconSocialInstagram"
            url= 'instagramUrl'
            ></Social>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
