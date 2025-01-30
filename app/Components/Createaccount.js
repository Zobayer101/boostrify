import Image from "next/image";
import logo from "../Image/boostrify.png";

const Createaccount = () => {
  return (
    <div className="OuterModal">
      <div className="Modelpage">
        <div className="ModalStart">
          <div className="Header">
            <Image src={logo} alt="logoPhoto" width={220} />
          </div>

          {/* <div className="LoginSection">
            <input type="email" placeholder="email" className="email" />
            <input type="password" placeholder="password" className="email" />
            <div className="btnSection">
              <div className="remember">
                <input type="checkbox" className="checkbox" />
                remember me
              </div>
              <div className="submitbtn">Login</div>
            </div>
          </div> */}
          <div className="SignupSection">
            <input type="text" placeholder="user name" className="email" />
            <input type="email" placeholder="email" className="email" />
            <input type="password" placeholder="password" className="email" />
            <input type="text" placeholder="country" className="email" />
            <div className="BtnSections">
              <div className="submitbtn">Signup</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createaccount;
