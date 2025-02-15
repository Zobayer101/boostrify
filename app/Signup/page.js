"use client";

import Image from "next/image";
import logo from "../Image/boostrify.png";
import "../design/Login.css";
import Link from "next/link";
import { redirect } from "next/navigation";

import { useState } from "react";
const Signup = () => {
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    password: "",
    country: "",
  });

  const hanelControll = (value, name) => {
    setSignup((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const UploadUserData = async () => {
    const api = "  http://localhost:3300/routes/api/signup";
    const responce = await fetch(api, {
      body: JSON.stringify(signup),
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await responce.json();
    if (!result.data) {
      alert("account not create !");
    } else {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.data));
      
      redirect("/profile");
    }
  };
  return (
    <>
      <div className="OuterModal">
        <div className="Modelpage">
          <div className="ModalStart">
            <div className="Header">
              <Image src={logo} alt="logoPhoto" width={220} />
            </div>

            <div className="SignupSection">
              <input
                type="text"
                placeholder="Full name"
                className="email"
                value={signup.fullname}
                onChange={(e) => hanelControll(e.target.value, "fullname")}
              />
              <input
                type="email"
                placeholder="email"
                className="email"
                value={signup.email}
                onChange={(e) => hanelControll(e.target.value, "email")}
              />
              <input
                type="password"
                placeholder="password"
                className="email"
                value={signup.password}
                onChange={(e) => hanelControll(e.target.value, "password")}
              />

              <select
                className="email"
                onChange={(e) => hanelControll(e.target.value, "country")}
              >
                <option value={""}>choose country</option>
                <option value={"amirica"}>amirica</option>
                <option value={"bangladesh"}>bangladesh</option>
                <option value={"India"}>India</option>
                <option value={"canada"}>canada</option>
                <option value={"poland"}>poland</option>
                <option value={"pakistan"}>pakistan</option>
                <option value={"butan"}>butan</option>
                <option value={"amirica"}>amirica</option>
                <option value={"bangladesh"}>bangladesh</option>
                <option value={"India"}>India</option>
                <option value={"canada"}>canada</option>
                <option value={"poland"}>poland</option>
                <option value={"pakistan"}>pakistan</option>
                <option value={"butan"}>butan</option>
                <option value={"amirica"}>amirica</option>
                <option value={"bangladesh"}>bangladesh</option>
                <option value={"India"}>India</option>
                <option value={"canada"}>canada</option>
                <option value={"poland"}>poland</option>
                <option value={"pakistan"}>pakistan</option>
                <option value={"butan"}>butan</option>
                <option value={"amirica"}>amirica</option>
                <option value={"bangladesh"}>bangladesh</option>
                <option value={"India"}>India</option>
                <option value={"canada"}>canada</option>
                <option value={"poland"}>poland</option>
                <option value={"pakistan"}>pakistan</option>
                <option value={"butan"}>butan</option>
              </select>
              <div className="BtnSections">
                <div className="submitbtn" onClick={() => UploadUserData()}>
                  Signup
                </div>
                <div className="Ihavea">
                  <Link href={"/Login"}>I have a account!</Link>
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
