import React from "react";
import Comment from "../components/comment/Comment";
import Header from "../components/header/Header";
import Members from "../components/members/Members";
import ContentUI from "../components/content/ContentUI";
import womanChildImg from "../assets/womanWithChild.png";
import bookmarkCheckImg from "../assets/bookmarkCheck.webp";
import contentImg2 from "../assets/contentImg2.png";
import babyContent from "../assets/babyContent.png";
import doctorImg from "../assets/doctorImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { HeartOutlined } from "@ant-design/icons";
import bookmarkImg from "../assets/bookmark.jpeg";
import babyImg3 from "../assets/babyImg3.png";
import RightContentUI from "../components/content/RightContentUI";
import womanChildImg2 from "../assets/womanWithChild2.png";
import contentImg3 from "../assets/contentImg3.png";
import yogaImg from "../assets/yogaImg.png";
import milupaLogo from "../assets/milupaLg.png";

import EventJoin from "../components/eventJoin/EventJoin";
import familyImg from "../assets/familyMeetingImg.jpg";
import commericalImg from "../assets/commericalImg.png";
import HelperContent from "../data/HelperContent";
export default function HomePage() {
  const {
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
  } = HelperContent();
  const rightContentUIObjects = [
    {
      userImg: womanChildImg2,
      username: "Ayşe Palandöken",
      contentImg: contentImg3,
      hasContentImage: true,
      hasGradient: false,
      contentText: contentTxt4,
      hasUserImage: true,
      likeCount: 2,
      commentCount: 324,
    },
    {
      userImg: womanChildImg2,
      username: "Merve Yılmaz",
      contentImg: yogaImg,
      hasUserImage: false,
      hasContentImage: true,
      hasGradient: true,
      contentText: contentTxt5,
      likeCount: 12,
      commentCount: 324,
      isGradient: true,
    },
  ];

  const contentUIObjects = [
    {
      userImg: womanChildImg,
      username: "Derya Deniz",
      contentImg: contentImg,
      heartCount: 24,
      heartIcon: heartIcon,
      rightImg: bookmarkCheckImage,
      contentText: contentTxt2,
      arrowCount: arrc,
      hasContentImage: true,
      isLastContent: false,
      hasGradient: false,
      isCommercial: false,
      isWatchable:true
    },
    {
      userImg: doctorImg,
      username: "Ahmet Yıldız Kenter",
      job: "Medical Doctor",
      heartCount: 1,
      heartIcon: heartIconOutlined,
      rightImg: bookmark,
      contentText: contentTxt2,
      arrowCount: arrc,
      hasContentImage: false,
      isLastContent: false,
      hasGradient: true,
      isCommercial: false,
      isWatchable:false
    },
    {
      userImg: doctorImg,
      username: "Ahmet Yıldız Kenter",
      job: "Medical Doctor",
      contentImg: babyImg3,
      heartCount: 3,
      rightImg: bookmark,
      heartIcon: heartIconOutlined,
      arrowCount: 1,
      contentText: contentTxt1,
      hasContentImage: true,
      isLastContent: false,
      hasGradient: true,
      isCommercial: false,
      isWatchable:false
    },
    {
      username: "Milupa",
      job: "SPONSORED",
      heartCount: 3,
      arrowCount: 1,
      hasGradient: false,
      rightImg: bookmark,
      heartIcon: heartIconOutlined,
      contentText: contentTxt1,
      isCommercial: true,
      commercialImg: commericalImg,
      isLastContent: false,
      userImg: milupaLogo,
      hasContentImage: true,
      isWatchable:false
    },
    {
      userImg: doctorImg,
      username: "Ahmet Yıldız Kenter",
      job: "Medical Doctor",
      contentImg: babyImg3,
      heartCount: 3,
      rightImg: bookmark,
      heartIcon: heartIconOutlined,
      arrowCount: 1,
      contentText: contentTxt3,
      hasContentImage: true,
      isLastContent: true,
      hasGradient: true,
      isCommercial: false,
      isWatchable:false
    },
  ];

  return (
    <>
      <Header />
      <div className="absolute top-15 right-64">
        {rightContentUIObjects.map((content, index) => (
          <RightContentUI
            key={index}
            userImg={content.userImg}
            username={content.username}
            contentImg={content.contentImg}
            hasContentImage={content.hasContentImage}
            hasGradient={content.hasGradient}
            contentText={content.contentText}
            hasUserImage={content.hasUserImage}
            likeCount={content.likeCount}
            commentCount={content.commentCount}
            isGradient={content.isGradient}
          />
        ))}
        <div className="relative top-24 pt-2">
          <EventJoin
            img={womanChildImg2}
            title={contentTxt6}
            contentImg={familyImg}
            hasContentImage={true}
            hasGradient={false}
            likeCount={2}
            commentCount={324}
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-1 flex-col gap-24">
          <Comment />
          <ContentUI
            userImg={doctorImg}
            username="Ahmet Yıldız Kenter"
            job="Medical Doctor"
            contentImg={babyContent}
            heartCount={3}
            rightImg={bookmark}
            heartIcon={heartIconOutlined}
            arrowCount={1}
            contentText={contentTxt1}
            hasContentImage={true}
            hasNum={true}
            num={3}
            isLastContent={false}
            hasGradient={true}
            isCommercial={false}
            
          />
          <Members />
          {contentUIObjects.map((content, index) => (
            <ContentUI
              key={index}
              userImg={content.userImg}
              username={content.username}
              contentImg={content.contentImg}
              heartCount={content.heartCount}
              heartIcon={content.heartIcon}
              rightImg={content.rightImg}
              contentText={content.contentText}
              arrowCount={content.arrowCount}
              hasContentImage={content.hasContentImage}
              isLastContent={content.isLastContent}
              hasGradient={content.hasGradient}
              isCommercial={content.isCommercial}
              job={content.job}
              commercialImg={content.commercialImg}
              isWatchable={content.isWatchable}

            />
          ))}
        </div>
      </div>
    </>
  );
}
