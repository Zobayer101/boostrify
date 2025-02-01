"use client";

import Image from "next/image";
import logo from "../Image/boostrify.png";
import "../design/Login.css";
import Link from "next/link";
const Signup = () => {
  return (
    <>
      <div className="OuterModal">
        <div className="Modelpage">
          <div className="ModalStart">
            <div className="Header">
              <Image src={logo} alt="logoPhoto" width={220} />
            </div>

            <div className="SignupSection">
              <input type="text" placeholder="Full name" className="email" />
              <input type="email" placeholder="email" className="email" />
              <input type="password" placeholder="password" className="email" />
              <input type="text" placeholder="country" className="email" />
              <div className="BtnSections">
                <div className="submitbtn">Signup</div>
                <div className="Ihavea">
                  <Link href={"/Login"}>Create a account !</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
