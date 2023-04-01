"use client";
import React from "react";
export default function ImageCarrusel({ children }) {
  const imgs = [
    {
      id: "img0",
    },
    {
      id: "img1",
    },
    {
      id: "img2",
    },
  ];

  return (
    <>
      <div className="slider bg-rd">
        <div className="containerSlider">
          {imgs.map(({ id }) => (
            <div className={`${id}`}>{children}</div>
          ))}
        </div>
      </div>
    </>
  );
}
