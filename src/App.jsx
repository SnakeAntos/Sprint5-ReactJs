import "./App.css";
import Header from "./Components/Header/index.jsx";
import Hero from "./Components/Hero/index.jsx";
import FeaturesCont from "./Components/Features/index.jsx";
import Aside from "./Components/Aside/index.jsx";
import Quotes from "./Components/Quotes/index.jsx";
import GetReady from "./Components/GetReady";
import Footer from "./Components/Footer/index.jsx";

function App() {
  return (
    <>
      <div className="app-container">
        <Header></Header>
        <Hero
          text="All your files in one secure location, accessible anywhere"
          paragraph="Fylo stores all your most important files in one secure location.
        Access them wherever you need, share and collaborate with firends, family and co-workers."
        ></Hero>
        <FeaturesCont></FeaturesCont>
        <Aside
          text="Stay productive, wherever you are"
          paragraph="Never let location be an issue when accessing your files. Fylo has you covered of your file storage needs"
          paragraph2="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required"
          link="See how Fylo works"
        ></Aside>
        <Quotes></Quotes>
        <GetReady
          title="Get early access today"
          paragraph="It only a minute to sign up and our free starter tier is extremely generous.
         If you have any questions, our support team would be happy to help you."
        ></GetReady>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
