import Image from "next/image";
import LikeYoutube from "../Icon/likeyoutube.png";
import Follows from "../Icon/ReadFollow.png";
import subscrib from "../Icon/subscrib.png";
import youtubeShear from "../Icon/shareyoutube.png";
import YoutubeComment from "../Icon/commentyoutube.png";

const Services = ({ props }) => {
  return (
    <div className="ServiceSection">
      <div className="OneCollum">
        <div className="CoverOne">
          <div className="Imgtexts">
            <Image src={LikeYoutube} alt="like now" width={100} />

            <p>Price / 1: 0.01 $</p>
          </div>
          <div className="InputBox">
            <input type="number" />
            <div className="total">10 $</div>
          </div>
        </div>
        <div className="Covertow">
          <div className="Imgtexts">
            <Image src={YoutubeComment} alt="like now" width={100} />
            <p>Price / 1: 0.01 $</p>
          </div>
          <div className="InputBox">
            <input type="number" />
            <div className="total">10 $</div>
          </div>
        </div>
      </div>
      <div className="towCollum">
        <div className="Coverx">
          <div className="Imgtexts">
            <Image
              src={props == "follow" ? Follows : subscrib}
              alt="like now"
              width={100}
            />
            <p>Price / 1: 0.05 $</p>
          </div>
          <div className="InputBox">
            <input type="number" />
            <div className="total">10 $</div>
          </div>
        </div>
        <div className="Covery">
          <div className="Imgtexts">
            <Image src={youtubeShear} alt="like now" width={100} />
            <p>Price / 1: 0.01 $</p>
          </div>
          <div className="InputBox">
            <input type="number" />
            <div className="total">10 $</div>
          </div>
        </div>
      </div>
      {/* <div className="Selects">
        <div className="country">Your country is </div>
        <div className="selectBox">
          <div className="CountryText"></div>
          <div className="drop"></div>
        </div>
      </div> */}
      <div className="NextCollum">
        <div className="Textaction">Total Price 25$</div>
        <div className="saveBtn">Free Now</div>
      </div>
    </div>
  );
};

export default Services;
