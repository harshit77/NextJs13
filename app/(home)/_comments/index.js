"use client";

import { useEffect, useRef } from "react";
import List from "./List"

export default function Counter({comments}) {
    const commentWrapperRef = useRef(null);
  useEffect(() => {
    commentWrapperRef.current.style.height = `calc(100vh - ${
      commentWrapperRef.current.getBoundingClientRect().top + 16
    }px)`;
  }, []);

  return (
     <div
          className="flex flex-col space-y-4 h-72 overflow-auto"
          ref={commentWrapperRef}
    >
        <List comments={comments}/>
    </div>
  );
}
