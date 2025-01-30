import "../design/Profile.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../Image/boostrify.png";
import noPhoto from "../Image/Nophoto.png";
const profile = () => {
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
            <div className="Names">my Name</div>
          </div>
          <div className="Balence">Total balence: 0$</div>
          <div className="Coine">Total Coine: 20</div>
        </div>
        <div className="SocundSection">
          <div className="Bar">
            <div className="Fill"></div>
          </div>
        </div>
        <div className="ThardSection">
          <div className="Task">Earn coine with complite the task.</div>
        </div>
      </div>
      <div className="taskSection">
        <div className="taskOne"></div>
        <div className="taskOne"></div>
        <div className="taskOne"></div>
        <div className="taskOne"></div>
      </div>
    </div>
  );
};

export default profile;
