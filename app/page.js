import "./design/main.css";
import Image from "next/image";
import logo from "./Image/boostrify.png";
import nophoto from "./Image/Nophoto.png";
import Graphy from "./Image/graphys.png";
import AboutPhoto from "./Image/aboutus.png";
import youtube from "./Icon/youtube-Photoroom.png";
import twitter from "./Icon/twitter-Photoroom.png";
import Likee from "./Icon/likee-Photoroom.png";
import Tiktok from "./Icon/tiktok-Photoroom.png";
import Raddit from "./Icon/radit-Photoroom.png";
import faceBook from "./Icon/facebook-Photoroom.png";
import Instagram from "./Icon/instagram-Photoroom.png";
import Sphotify from "./Icon/spodify-Photoroom.png";
import pintarast from "./Icon/pintarast-Photoroom.png";
import Talegram from "./Icon/talegram-Photoroom.png";
import Whatapp from "./Icon/whatsup-Photoroom.png";
import Vk from "./Icon/vk-Photoroom.png";

export default function Home() {
  const status = false;
  return (
    <div className="mainpage">
      <div className="navbar">
        <div className="logo">
          <Image src={logo} alt="boostrify" width={170} />
        </div>
        {/* <div className="Section"></div> */}
        <div className="profile">
          {status ? (
            <Image src={nophoto} alt="profile" width={50} className="IMG" />
          ) : (
            <div className="LogBtn">
              <div className="Login">Login</div>{" "}
              <div className="Singup">Singup</div>
            </div>
          )}
        </div>
      </div>
      <div className="view">
        <div className="fistContent">
          <h2 className="HT">Best Free SMM Panel ever</h2>
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
          <div className="fastline">
            <div className="youtube box">
              {" "}
              <Image src={youtube} alt="youtube Icon" width={70} />
              youtube
            </div>
            <div className="x box">
              {" "}
              <Image src={twitter} alt="twitter" width={70} />
              X.com
            </div>
            <div className="likee box">
              <Image src={Likee} alt="Likee" width={70} />
              Likee
            </div>
            <div className="tiktok box">
              <Image src={Tiktok} alt="Tiktok" width={55} /> tiktok
            </div>
          </div>
          <div className="scoundline">
            <div className="Raddit box">
              {" "}
              <Image src={Raddit} alt="Raddit" width={55} />
              Raddit
            </div>
            <div className="facebook box">
              <Image src={faceBook} alt="facebook" width={55} /> facebook
            </div>
            <div className="instagram box">
              <Image src={Instagram} alt="Instagram" width={70} /> instagram
            </div>
            <div className="spotify box">
              <Image src={Sphotify} alt="Sphotify" width={70} /> spotify
            </div>
          </div>
          <div className="thardline">
            <div className="pintarest box">
              <Image src={pintarast} alt="pintarast" width={70} /> pintarast
            </div>
            <div className="talegram box">
              <Image src={Talegram} alt="talegram" width={70} /> talegram
            </div>
            <div className="whatsup box">
              {" "}
              <Image src={Whatapp} alt="whtsapp" width={65} /> whatsup
            </div>
            <div className="vk box">
              <Image src={Vk} alt="vk" width={85} /> vk
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs">
        <div className="aboutCover">
          <div className="TextSection">
            <h3>About Us</h3>
            <p className="Paraabout">
              Welcome to boostrify, a platform built on authenticity and growth.
              We believe in striving for personal improvement rather than
              competing with others. All traffic on our site is real and
              verified, ensuring genuine connections and meaningful engagement.
              Our services are completely free, making it easy for everyone to
              share, connect, and grow. Join us to build an authentic community
              where everyone can thrive together.
            </p>
          </div>
          <div className="imageSection">
            <Image
              src={AboutPhoto}
              alt="aboutphoto"
              sizes="20"
              width={500}
              className="imgeAbout"
            />
          </div>
        </div>
      </div>

      <div className="Footer">
        <div className="privace">privace policy</div>
        <div className="copyright">Copyright © 2025 . All rights reserved.</div>
      </div>
    </div>
  );
}
