import "./design/main.css";
import Image from "next/image";
import logo from "./Image/boostrify.png";
import nophoto from "./Image/Nophoto.png";
import Graphy from "./Image/graphys.png";

export default function Home() {
  return (
    <div className="mainpage">
      <div className="navbar">
        <div className="logo">
          <Image src={logo} alt="boostrify" width={170} />
        </div>
        {/* <div className="Section"></div> */}
        <div className="profile">
          <Image src={nophoto} alt="profile" width={50} className="IMG" />
        </div>
      </div>
      <div className="view">
        <div className="fistContent">
          <h2 className="HT">Best SMM Panel ever</h2>
          <p className="Para">
            Welcome to Boostrify The Ultimate Social Media Growth Partner! Are
            you ready to elevate your online presence? At Boostrify, we
            specialize in affordable and effective social media boosting
            services that help you grow your followers, increase engagement, and
            amplify your brand.
          </p>
        </div>
        <div className="graphic">
          <Image src={Graphy} alt="boostrify graphys" width={500} />
        </div>
      </div>

      <div className="Service">
        <div className="serviceText">
          <h2 className="chooseNetwork">Choose social network</h2>
        </div>
        <div className="AllNetwork">
          <div className="fastline"></div>
          <div className="scoundline"></div>
          <div className="thardline"></div>
        </div>
      </div>

      <div className="AboutUs"></div>

      <div className="Footer"></div>
    </div>
  );
}
