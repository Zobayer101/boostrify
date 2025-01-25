import Navbar from "../Components/Navbar";
import "../design/Navbar.css";
import "../design/Youtube.css";
import Youtubes from "../Icon/youtube-Photoroom.png";
import Image from "next/image";
import BostChannel from "../Icon/BostChannel.png";
const Youtube = () => {
  return (
    <div className="youtubePage">
      <Navbar />
      <div className="View">
        <Image src={Youtubes} alt="youtube" width={70} />
        <div className="hader">grow your channel with real traffic !</div>
      </div>
      <div className="graphics">
        <Image src={BostChannel} alt="Bostchannel" width={500} />
      </div>
    </div>
  );
};
export default Youtube;
