"use client"

import Image from "next/image"
import Typography from "./Typography";
import Button from "./Button";
import classnames from "classnames"
import { useState } from "react";


export default function Comment({user}) {
  const [liked,setLiked]= useState(false);
    return (
      <div className="flex flex-col space-y-4 px-4 pt-2 pb-4 rounded-md shadow-md bg-white">
        {user?.image && (
          <Image
            src={user?.image}
            width={500}
            height={500}
            alt="Picture of discussion"
          />
        )}
        <div className="flex space-x-4">
          <div className="flex justify-center items-center bg-slate-300 w-16 h-14 rounded-full">
            <i
              className={classnames("ri-user-2-fill ri-xl", {
                [user.avatar]: user.avatar,
              })}
            ></i>
          </div>
          <div className="flex flex-col space-y-10 mt-2 break-all">
            <div className="flex items-center space-x-4">
              <Typography component="body2" family="medium">
                {user.name}
              </Typography>
              <Button {...user.filterType} size="small"></Button>
            </div>
            <Typography component="body2" family="medium">
              {user.message}
            </Typography>
            <div className="flex items-center space-x-2 md:space-x-10">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setLiked((prev) => !prev)}
              >
                <i
                  className={classnames("ri-xl", {
                    "ri-heart-line": !liked,
                    "ri-heart-fill": liked,
                  })}
                />
                <Typography component="body1" family="medium">
                  {user.liked}
                </Typography>
              </div>
              <div className="flex space-x-2 cursor-pointer">
                <i className="ri-eye-line ri-xl" />
                <Typography component="body1" family="medium">
                  {user.viewed}
                </Typography>
              </div>
              <div className="flex space-x-2 cursor-pointer">
                <i className="ri-chat-4-line ri-xl" />
                <Typography component="body1" family="medium">
                  {user.comments} Comments
                </Typography>
              </div>
              <div className="flex space-x-2 cursor-pointer">
                <i className="ri-share-line ri-xl" />
                <Typography component="body1" family="medium">
                  Share
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}