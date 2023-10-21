import { IntroIllustration } from "../assets";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-ImgBox">
          <img src={IntroIllustration} alt="" />
        </div>
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="HeaderWrapper-TxtBox-Btn">Get Started</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
