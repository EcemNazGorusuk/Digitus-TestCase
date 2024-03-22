import React from "react";
import babyContent from "../../assets/babyContent.png";
import shareImg from "../../assets/share.png";
import bookmarkImg from "../../assets/bookmark.jpeg";
import { HeartOutlined } from "@ant-design/icons";
import playImg from "../../assets/playImg.png";

export default function ContentUI({
  userImg,
  username,
  job,
  contentImg,
  hasContentImage,
  hasGradient,
  num,
  hasNum,
  heartCount,
  arrowCount,
  heartIcon,
  rightImg,
  contentText,
  isWatchable,
  isLastContent,
  isCommercial,
  commercialImg,
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div
        className={`flex px-3 justify-between h-[65px] rounded-tl-xl rounded-tr-xl w-[640px] min-w-[268px] lg:justify-between relative right-24 md:top-[30px] top-[40px] ${
          isCommercial
            ? "bg-linear-gradient(90deg, #A29BFE 150%, #00CEC9 250%)"
            : "bg-white"
        } border-gray-300 shadow-2xl`}
        style={{
          background: isCommercial
            ? "linear-gradient(90deg, #A29BFE 100%, #00CEC9 100%)"
            : "none",
        }}
      >
        <div className="flex items-center gap-2">
          <div>
            {!isCommercial && (
              <div className="rounded-full w-[50px] h-[50px] rounded-border-gradient flex items-center justify-center border border-white">
                <div className="rounded-full border-2 flex items-center justify-center border-white">
                  <img
                    src={userImg}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            )}

            {isCommercial && (
              <div className="rounded-full w-[47px] h-[47px] border-2 flex items-center justify-center  border-red-500">
                <div className="rounded-full w-[43px] h-[43px]  flex items-center justify-center border border-white">
                  <img
                    src={userImg}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" absolute left-20 gap-1 top-3">
          <div className="leading-[18px] font-[400] text-[18px]">
            {username}
          </div>
          {!isCommercial && (
            <div className="leading-[18px] font-[400] text-[18px] text-[#FDCB6E]">
              {job}
            </div>
          )}
          {isCommercial && (
            <div className="leading-[18px] font-[400] text-[18px] text-red-600">
              {job}
            </div>
          )}
        </div>

        <div className="flex items-center w-7 h-[6.5] font-bold text-[30px] relative bottom-2">
          ...
        </div>
      </div>
      {hasGradient && (
        <div className="border-gradient w-[640px] h-[5px] relative top-[30px] right-24"></div>
      )}
      {hasContentImage && (
        <div
          className={`h-[370px] w-[640px] min-w-[268px] lg:justify-center relative right-24 md:top-[30px] top-[50px]`}
        >
          {isWatchable && (
            <div className="absolute left-64 top-32">
              <img src={playImg} className="w-32 h-32"/>
            </div>
          )}
          <img src={contentImg} alt="" />

          {hasNum && (
            <div className="absolute top-[13%] transform translate-y-[-50%] right-10 w-[3px] h-[18px] text-white text-[18px] leading-[18px]">
              {num}
            </div>
          )}

          {isCommercial && (
            <div className="w-full h-full bg-white relative">
              <div className="absolute top-0 right-1 pr-1 ">
                <div className="flex  flex-col relative z-10 font-[400] left-64  top-10 font-inter text-[94px]">
                  <div className="text-[#ff4c4c]">milupa</div>
                  <div className="text-[#009044]">nontio</div>
                </div>
                <div className="flex ">
                  <div
                    className="relative bottom-44  left-48  w-36 h-36 bg-[#67A46B] rounded-full opacity-25"
                    style={{ zIndex: "9" }}
                  ></div>
                  <div
                    className="relative bottom-60 left-16  w-52 h-52 bg-[#fff8dc] rounded-full opacity-50"
                    style={{ zIndex: "9" }}
                  ></div>
                  <img
                    src={commercialImg}
                    alt="commercialImg"
                    className="z-20 relative bottom-56 opacity-13.53"
                    style={{ width: "18rem", height: "auto", zIndex: "8" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className={`flex flex-col -mb-36`}>
        <div
          className={` ${
            isLastContent && " -mb-48 h-[512px]"
          }  flex px-7 justify-between h-[292px] rounded-bl-xl rounded-br-xl w-[640px] min-w-[268px] lg:justify-between relative right-24 md:top-[30px] top-[50px] bg-white border-gray-400 shadow-2xl`}
        >
          <div
            className={`flex items-center gap-8 relative bottom-24 ${
              isLastContent && "bottom-48"
            }`}
          >
            <div className="flex flex-col py-1 ">
              <div>{heartIcon}</div>
              <div className="items-center text-center">{heartCount}</div>
            </div>
            <div className="flex flex-col py-1 ">
              <div>
                <img
                  src={shareImg}
                  className="w-10 h-10"
                  style={{ width: "40px", height: "30px" }}
                />
              </div>
              <div className="items-center text-center">{arrowCount}</div>
            </div>
          </div>
          <div
            className={`flex items-center justify-end relative bottom-28  ${
              isLastContent && "bottom-48"
            } ${isLastContent && "bottom-48"}`}
          >
            {rightImg}
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 text-[14px] relative bottom-44 right-16 text-[#B2BEC3]">
          <span className="text-black">2</span> Min •
          <span className="text-black">4</span> views •
          <span className="text-black">5</span> Comments
        </div>
        <div className="flex flex-col px-4 leading-6 font-[700] text-[18px] relative bottom-44 right-20 text-[#2D3436]">
          {contentText}
        </div>
        <div className="flex flex-col px-4 py-3 leading-[18.15px] font-[400] text-[15px] relative bottom-44 right-20 text-[#636E72]">
          #child #doctor #hospital #fever
        </div>
        <div className="flex flex-col  px-0 my-4 border-t-[0.3px] relative bottom-44 right-24 text-[#CCCCCC]"></div>

        <div className="flex  justify-between relative bottom-44 right-36">
          <div className="px-20  leading-[25px] font-[400] text-[19px] font-inter text-[#B2BEC3]">
            Comment This
          </div>
          <div className="leading-[19.36px] px-2 py-2 font-inter font-[400] text-[16px] border-[1.5px] rounded-[15px] text-[#B2BEC3] w-15 h-[30px] flex items-center justify-center">
            Post
          </div>
        </div>
      </div>
    </div>
  );
}
