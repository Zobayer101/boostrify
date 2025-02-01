"use client";

import Image from "next/image";
import logo from "../Image/boostrify.png";
import "../design/Login.css";
import Link from "next/link";
const Login = () => {
  return (
    <div className="OuterModal">
      <div className="Modelpage">
        <div className="ModalStart">
          <div className="Header">
            <Image src={logo} alt="logoPhoto" width={220} />
          </div>

          <div className="LoginSection">
            <input type="email" placeholder="email" className="email" />
            <input type="password" placeholder="password" className="email" />
            <div className="btnSection">
              <div className="submitbtn">Login</div>
              <div className="Ihavea">
                <Link href={"/Signup"}>Create a account !</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
