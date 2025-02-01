import "./design/main.css";
import Image from "next/image";

// import nophoto from "./Image/Nophoto.png";
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
import Link from "next/link";
// import Navbar from "./Components/Navbar";
import logo from "./Image/boostrify.png";
import nophoto from "./Image/Nophoto.png";
import "./design/Navbar.css";
//import Createaccount from "./Components/Createaccount";

export default function Home() {
  const status = false;
  return (
    <div className="mainpage">
      {/* <Navbar /> */}
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
              <div className="Login">
                <Link href={"/Login"}>Login</Link>
              </div>{" "}
              <div className="Singup">
                <Link href={"/Signup"}>Signup</Link>
              </div>
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
            <Link href={"/youtube"}>
              <div className="youtube box">
                {" "}
                <Image src={youtube} alt="youtube Icon" width={70} />
                Youtube
              </div>
            </Link>
            <Link href={"/xcom"}>
              <div className="x box">
                {" "}
                <Image src={twitter} alt="twitter" width={70} />
                X.com
              </div>
            </Link>
            <Link href={"/Likee"}>
              <div className="likee box">
                <Image src={Likee} alt="Likee" width={70} />
                Likee
              </div>
            </Link>
            <Link href={"/Tiktok"}>
              <div className="tiktok box">
                <Image src={Tiktok} alt="Tiktok" width={55} /> Tiktok
              </div>
            </Link>
          </div>
          <div className="scoundline">
            <Link href={"/Reddit"}>
              <div className="Raddit box">
                {" "}
                <Image src={Raddit} alt="Raddit" width={55} />
                Reddit
              </div>
            </Link>
            <Link href={"/Facebook"}>
              <div className="facebook box">
                <Image src={faceBook} alt="facebook" width={55} /> Facebook
              </div>
            </Link>
            <Link href={"/Instagram"}>
              <div className="instagram box">
                <Image src={Instagram} alt="Instagram" width={70} /> Instagram
              </div>
            </Link>
            <Link href={"/Spotify"}>
              <div className="spotify box">
                <Image src={Sphotify} alt="Sphotify" width={70} /> Spotify
              </div>
            </Link>
          </div>
          <div className="thardline">
            <Link href={"/Pintarast"}>
              <div className="pintarest box">
                <Image src={pintarast} alt="pintarast" width={70} /> Pintarast
              </div>
            </Link>
            <Link href={"/Talegram"}>
              <div className="talegram box">
                <Image src={Talegram} alt="talegram" width={70} /> Talegram
              </div>
            </Link>
            <Link href={"/Whatsup"}>
              <div className="whatsup box">
                {" "}
                <Image src={Whatapp} alt="whtsapp" width={65} /> Whatsup
              </div>
            </Link>
            <Link href={"/Vk"}>
              <div className="vk box">
                <Image src={Vk} alt="vk" width={85} /> Vk
              </div>
            </Link>
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
