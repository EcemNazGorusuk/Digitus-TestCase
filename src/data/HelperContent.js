import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { HeartOutlined } from "@ant-design/icons";
import EventJoin from "../components/eventJoin/EventJoin";

import womanChildImg from "../assets/womanWithChild.png";
import bookmarkCheckImg from "../assets/bookmarkCheck1.PNG";
import contentImg2 from "../assets/contentImg2.png";
import babyContent from "../assets/babyContent.png";
import doctorImg from "../assets/doctorImg.png";
import bookmarkImg from "../assets/bookmark.jpeg";
import babyImg3 from "../assets/babyImg3.png";
import womanChildImg2 from "../assets/womanWithChild2.png";
import contentImg3 from "../assets/contentImg3.png";
import yogaImg from "../assets/yogaImg.png";
import familyImg from "../assets/familyMeetingImg.jpg";
import commericalImg from "../assets/commericalImg.png";

export default function HelperContent() {
  const arrc = <div className="text-white">1</div>;
  const contentImg = contentImg2;
  const heartIcon = (
    <FontAwesomeIcon
      icon={faHeart}
      color="red"
      size={40}
      className="w-8 h-[30px]"
    />
  );
  const heartIconOutlined = (
    <HeartOutlined className="text-black text-[30px]" />
  );
  const bookmarkCheckImage = (
    <img src={bookmarkCheckImg} style={{ width: "40px", height: "40px" }} />
  );

  const bookmark = (
    <img src={bookmarkImg} style={{ width: "60px", height: "50px" }} />
  );

  const contentTxt1 = (
    <>
      <p>Normal healthy 21 y/o patient came in presenting odd symptoms.</p>
      <p>Patient described a new set of symptoms they all get well…</p>
    </>
  );
  const contentTxt2 = (
    <>
      <p>The mom said she struggled with fertility issues and had an ectopic</p>
      <p>pregnancy after giving birth to her daughter.</p>
    </>
  );
  const contentTxt3 = (
    <>
      <p>Maecenas pulvinar nulla eu nibh imperdiet, et ullamcorper metus</p>
      <p>interdum. Duis vehicula quam non tempor viverra. Quisque sit</p>
      <p>amet commodo sem. Quisque eu cursus libero. Suspendisse</p>
      <p>cursus magna dui, id condimentum mi rutrum ac. Sed eget orci at</p>
      <p>tortor iaculis pretium. Duis in feugiat odio, a faucibus nisi.</p>
      <p>Maecenas et sollicitudin ipsum, porta accumsan dui. Maecenas</p>
      <p>malesuada suscipit ligula vitae dignissim. Curabitur eu lacinia</p>
      <p>enim. Fusce lectus lorem, ultrices ut arcu sed, gravida elementum</p>
      <p>lectus. Ut lobortis ullamcorper neque, et faucibus sem</p>
      <p>pellentesque ac.</p>
    </>
  );
  const contentTxt4 = (
    <span className="flex flex-col ">
      <span>Hiking in mountains with my little baby :)</span>
    </span>
  );
  const contentTxt5 = (
    <span className="flex flex-col ">
      <span>Yoga programs for early pregnants</span>
    </span>
  );

  const contentTxt6 = (
    <div className="flex flex-col">
      <span className="font-[500]">Momsista Family</span>
      <span className="font-[500]"> Meeting</span>
      <span className="font-[500] text-[#AFAFAF]">July’19</span>
    </div>
  );

  return {
    arrc,
    contentImg,
    heartIcon,
    heartIconOutlined,
    bookmarkCheckImage,
    bookmark,
    contentTxt1,
    contentTxt2,
    contentTxt3,
    contentTxt4,
    contentTxt5,
    contentTxt6,
  };
}
