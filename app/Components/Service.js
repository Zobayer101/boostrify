"use client";

import Image from "next/image";
import LikeYoutube from "../Icon/likeyoutube.png";
import Follows from "../Icon/ReadFollow.png";
import subscrib from "../Icon/subscrib.png";
import youtubeShear from "../Icon/shareyoutube.png";
import YoutubeComment from "../Icon/commentyoutube.png";
import Link from "next/link";
import {  useState } from "react";
import { redirect } from "next/navigation";

const Services = ({ props }) => {
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);
  const [shear, setShear] = useState(0);
  const [subcribe, setSubcrib] = useState(0);

  const local = localStorage.getItem("token");

  if (!local) {
    return redirect("/Login");
  }

  return (
    <div className="ServiceSection">
      <div className="OneCollum">
        <div className="CoverOne">
          <div className="Imgtexts">
            <Image src={LikeYoutube} alt="like now" width={100} />

            <p>Price / 1: 0.01 $</p>
          </div>
          <div className="InputBox">
            <input
              type="number"
              value={like}
              onChange={(e) =>
                setLike(e.target.value < 1000 ? e.target.value : like)
              }
            />
            <div className="total">{like * (0.01).toFixed(2)} $</div>
          </div>
        </div>
        <div className="Covertow">
          <div className="Imgtexts">
            <Image src={YoutubeComment} alt="like now" width={100} />
            <p>Price / 1: 0.01 $</p>
          </div>
          <div className="InputBox">
            <input
              type="number"
              value={comment}
              onChange={(e) =>
                setComment(e.target.value < 1000 ? e.target.value : comment)
              }
            />
            <div className="total">{(comment * 0.01).toFixed(2)} $</div>
          </div>
        </div>
      </div>
      <div className="towCollum">
        <div className="Coverx">
          <div className="Imgtexts">
            <Image
              src={props == "follow" ? Follows : subscrib}
              alt="like now"
              width={100}
            />
            <p>Price / 1: 0.05 $</p>
          </div>
          <div className="InputBox">
            <input
              type="number"
              value={subcribe}
              onChange={(e) =>
                setSubcrib(e.target.value < 1000 ? e.target.value : subcribe)
              }
            />
            <div className="total">{(subcribe * 0.05).toFixed(2)} $</div>
          </div>
        </div>
        <div className="Covery">
          <div className="Imgtexts">
            <Image src={youtubeShear} alt="like now" width={100} />
            <p>Price / 1: 0.01 $</p>
          </div>
          <div className="InputBox">
            <input
              type="number"
              value={shear}
              onChange={(e) =>
                setShear(e.target.value < 1000 ? e.target.value : shear)
              }
            />
            <div className="total">{shear * (0.01).toFixed(2)} $</div>
          </div>
        </div>
      </div>
      {/* <div className="Selects">
        <div className="country">Your country is </div>
        <div className="selectBox">
          <div className="CountryText"></div>
          <div className="drop"></div>
        </div>
      </div> */}
      <div className="NextCollum">
        <div className="Textaction" onClick={() => alert("ok")}>
          Total Price{" "}
          {(
            like * 0.01 +
            comment * 0.01 +
            shear * 0.01 +
            subcribe * 0.03
          ).toFixed(2)}{" "}
          $
        </div>

        <div className="saveBtn">
          <Link href={"/profile"}>Free Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
