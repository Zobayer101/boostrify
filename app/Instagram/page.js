import Navbar from "../Components/Navbar";
import "../design/Navbar.css";
import "../design/Youtube.css";
import Youtubes from "../Icon/instagram-Photoroom.png";
import Image from "next/image";

import BostChannel from "../Icon/InstagramBosting.png";
import Services from "../Components/Service";
const Instagram = () => {
  return (
    <div className="youtubePage">
      <Navbar />
      <div className="View">
        <Image src={Youtubes} alt="youtube" width={70} />
        <div className="hader">grow your channel with real traffic</div>
      </div>
      <div className="graphics">
        <div className="CoverGraphics">
          <Image src={BostChannel} alt="Bostchannel" width={500} />
        </div>
        <div className="AboutText">
          <p className="paragraph">
            Boostrify is one of the best social media boosting platforms
            designed to help you grow your YouTube channel with real traffic. By
            completing a few simple tasks, you can increase your reach, gain
            authentic engagement, and watch your channel thrive. It's fast, easy
            to use, and offers real results to help content creators succeed in
            today’s competitive digital world. Boost your presence with
            confidence and watch your growth skyrocket!
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};
export default Instagram;
