import React from "react";
import playImg from "../../assets/playImg.png"
export default function RightContentUI({
  userImg,
  username,
  hasUserImage,
  contentImg,
  hasContentImage,
  isGradient,
  contentText,
  likeCount,
  commentCount,
  hasGradient
}) {
  return (
    <div className="right-content-ui flex flex-col items-center w-full h-full mt-7">
      <div className="user-info flex items-center px-3 justify-start h-9 w-56 bg-white border-gray-300 shadow-2xl rounded-tl-md rounded-tr-md">
        <div className="content-image w-7 h-7 relative mr-2">
        {hasUserImage && (
            <img
              src={userImg}
              alt={username}
              className="rounded-full w-full h-full object-cover"
            />
          )}


          {hasGradient && (
           <div className="rounded-full rounded-border-gradient border-2  w-7 h-7 ">
            <div className="rounded-full bg-white  w-6 h-6 ">
            
            </div>
           </div>
            
          )}
        </div>
        <div className="user-details flex flex-col text-left justify-center">
          <div className="username text-xs font-medium">{username}</div>
        </div>
      </div>

      {isGradient && <div className="border-gradient w-56 h-1"></div>}

      {hasContentImage && (
        <div className="content-image w-56 h-34 ">
          <img
            src={contentImg}
            alt="Content"
            className="w-full h-full object-cover"
          />
            <div className="absolute left-20 top-96 pt-5">
              <img src={playImg} className="w-14 h-14"/>
            </div>
        </div>
      )}

      <div className="content-details flex flex-col items-center  bg-white border-gray-300 shadow-2xl rounded-b-md p-2 w-56">
        <div className="content-text text-sm font-semibold text-gray-700">
          {contentText}
        </div>
        <div className="engagement-info flex items-center mt-1 gap-11">
          <div className="likes text-xs font-medium text-gray-700">
            {likeCount} <span className="text-[#B2BEC3]">Likes</span>
          </div>
          <div className="comments text-xs font-medium text-gray-700 ml-4">
            {commentCount} <span className="text-[#B2BEC3]">Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
