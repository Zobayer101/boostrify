"use client";

import Image from "next/image";
import logo from "../Image/boostrify.png";
import "../design/Login.css";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const Upload = async () => {
    const api = "  http://localhost:3300/routes/api/login";
    const responce = await fetch(api, {
      body: JSON.stringify(login),
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await responce.json();
    if (result.msg) {
      alert("Account not Found !");
    } else {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.data));

      redirect("/profile");
    }
  };

  const handelChanger = (name, value) => {
    setLogin((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <div className="OuterModal">
      <div className="Modelpage">
        <div className="ModalStart">
          <div className="Header">
            <Image src={logo} alt="logoPhoto" width={220} />
          </div>

          <div className="LoginSection">
            <input
              type="email"
              value={login.email}
              placeholder="email"
              className="email"
              onChange={(e) => handelChanger("email", e.target.value)}
            />
            <input
              type="password"
              value={login.password}
              placeholder="password"
              className="email"
              onChange={(e) => handelChanger("password", e.target.value)}
            />
            <div className="btnSection">
              <div className="submitbtn" onClick={Upload}>
                Login
              </div>
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
