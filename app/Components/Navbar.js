"use client";
import logo from "../Image/boostrify.png";

import noPhoto from "../Icon/Bost-Photoroom.png";
import Image from "next/image";
import "../design/Navbar.css";
import Link from "next/link";
const status = localStorage.getItem("token");
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src={logo} alt="boostrify" width={170} />
      </div>
      {/* <div className="Section"></div> */}
      <div className="profile">
        {status ? (
          <Image src={noPhoto} alt="profile" width={50} className="IMG" />
        ) : (
          <div className="LogBtn">
            <Link href={"/Login"}>
              <div className="Login">Login</div>{" "}
            </Link>
            <Link href={"/Signup"}>
              <div className="Singup">Singup</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
