import logo from "../Image/boostrify.png";
import nophoto from "../Image/Nophoto.png";
import Image from "next/image";
import "../design/Navbar.css";
const status = false;
const Navbar = () => {
  return (
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
  );
};
export default Navbar;
