"use client";

import "../design/Profile.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../Image/boostrify.png";
import noPhoto from "../Icon/Bost-Photoroom.png";
import taskImg from "../Icon/TaskImg.png";
import MoneyImg from "../Icon/Balence.png";
import CoinsImg from "../Icon/Coins.png";
import EarnImg from "../Icon/Earn.png";
import GoldCoinImg from "../Icon/GoldCoine.png";
import UploadImg from "../Icon/UploadsImg.png";

import { redirect } from "next/navigation";

const Profile = () => {
  const local = localStorage.getItem("token");
  const UserName = localStorage.getItem("user");
  const user = JSON.parse(UserName);
  console.log(user.fullname);
  if (!local) {
    return redirect("/Signup");
  }
  return (
    <div className="ProfilePage">
      <div className="PageHeader">
        <div className="Backnow">
          <Link href={"/"}>
            <div className="BackIcon"></div>
          </Link>
        </div>
        <div className="Imgs">
          <Image src={logo} alt="logo" width={200} />
        </div>
      </div>
      <div className="ProfileInfo">
        <div className="fastProfilesection">
          <div className="profileImage">
            <Image src={noPhoto} alt="noPhoto" width={50} className="ims" />
            <div className="Names">{user.fullname || "my Name"}</div>
          </div>
          <div className="Balence">
            <div className="yourMoney">
              <Image src={MoneyImg} alt="Blance Img" width={50} /> 0 $
            </div>
          </div>
          <div className="Coine">
            <div className="CoinsImg">
              <Image src={CoinsImg} alt="Coines" width={50} />
              20
            </div>
          </div>
        </div>
        <div className="SocundSection"></div>
        <div className="ThardSection">
          <div className="Task">
            <Image src={EarnImg} alt="Earnimg" width={50} />
            Earn coine{" "}
          </div>
        </div>
      </div>
      <div className="taskSection">
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
        <div className="taskOne">
          <div className="numbers">
            <Image src={taskImg} alt="task" width={80} />
          </div>
          <div className="discription"> Create a acttive account </div>
          <div className="Create">
            <Image src={GoldCoinImg} alt="goldImag" width={40} /> 20
          </div>
          <div className="screenshort">
            {" "}
            <div className="accountcreate" title="Create active account">
              create
            </div>
            <div className="uploadSection" title="upload screenshort">
              <Image src={UploadImg} alt="upload" width={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
