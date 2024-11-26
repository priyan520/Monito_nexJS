"use client";

import React, { useState } from "react";

const MapPage = () => {
  const [dis, setDis] = useState(["hidden", " hidden", " hidden", "hidden"]);
  const [imgPosii, setImgPosii] = useState(["xl:left-[10.2%] top-[57px]" , "top-[55px] xl:left-[52%]" , "xl:left-[17.76%] top-[300px]" , "xl:left-[62.5%] xl:top-[392px]"]);

  function setDefalt() {
    setImgPosii(["xl:left-[10.2%] top-[57px]" , "top-[55px] xl:left-[52%]" , "xl:left-[17.76%] top-[300px]" , "xl:left-[62.5%] xl:top-[392px]"]);
    dis.forEach((v, i) => (dis[i] = "hidden"));
  }

  function handaleDis(index) {
    dis.forEach((v, i) => (dis[i] = "hidden"));
    dis[index] = "block";
    setDis([...dis]);
    
    if(index == 0){
      imgPosii[0] = "lg:left-[34.5%] xl:left-[29%] top-[115px] z-20"
      imgPosii[1] = "top-[55px] xl:left-[52%] z-0";
      imgPosii[2] = "xl:left-[17.76%] top-[300px] z-0";
      imgPosii[3] = "xl:left-[62.5%] xl:top-[392px] z-0";

      setTimeout(() => {
        imgPosii[0] = "lg:left-[34.5%] xl:left-[29%] top-[115px] z-20 scale-110";
        setImgPosii([...imgPosii]);
      },800)

    }else if(index == 1){
      imgPosii[0] = "xl:left-[10.2%] top-[57px] z-0";
      imgPosii[1] = "lg:left-[77%] top-[160px] xl:left-[70%] z-20";
      imgPosii[2] = "xl:left-[17.76%] top-[300px] z-0";
      imgPosii[3] = "xl:left-[62.5%] xl:top-[392px] z-0";

      setTimeout(() => {
        imgPosii[1] = "lg:left-[77%] top-[160px] xl:left-[70%] z-20 scale-110";
        setImgPosii([...imgPosii]);
      },800)
    }else if(index == 2){ 
      imgPosii[0] = "xl:left-[10.2%] top-[57px] z-0";
      imgPosii[1] = "top-[55px] xl:left-[52%] z-0";
      imgPosii[2] = "lg:left-[11%] lg:top-[360px] xl:left-[6%] xl:top-[360px] z-20";
      imgPosii[3] = "xl:left-[62.5%] xl:top-[392px] z-0";

      setTimeout(() => {
        imgPosii[2] = "lg:left-[11%] lg:top-[360px] xl:left-[6%] xl:top-[360px] z-20 scale-110";
        setImgPosii([...imgPosii]);
      },800)
    }else{
      imgPosii[0] = "xl:left-[10.2%] top-[57px] z-0";
      imgPosii[1] = "top-[55px] xl:left-[52%] z-0";
      imgPosii[2] = "xl:left-[17.76%] top-[300px] z-0";
      imgPosii[3] = "lg:left-[55%] lg:top-[290px] xl:left-[49%] xl:top-[290px] z-20";

      setTimeout(() => {
        imgPosii[3] = " lg:left-[55%] lg:top-[290px] xl:left-[49%] xl:top-[290px] z-20 scale-110";
        setImgPosii([...imgPosii]);
      },800)
    }


    setImgPosii([...imgPosii]);
  }

  return (
    <section
      className="map h-[695px] relative mb-[20px] max-w-full"
      onClick={setDefalt}
    >
      <div className="container">
        <div className="con">
          <div className="main_box">
            <div
              className={
                "img absolute map_img  lg:left-[15%] md:left-[10%] left-[10%] transition-all duration-1000 xs:ml-[-20px] 2xl:ml-0 xl:ml-[20px] " +
                imgPosii[0]
              }
            >
              <img
                src="/image/Ellipse.png"
                alt=""
                className="md:!w-[150px] w-[100px] hover:brightness-125 hover:scale-105"
                onClick={(e) => {
                  handaleDis(0);
                  e.stopPropagation();
                }}
              />
            </div>
            <div className="animation hidden lg:block">
              <div
                className={
                  "animation_box text-center p-4 pt-32 absolute top-[15%] left-[25%] z-10  bg-white w-[300px] rounded-lg " +
                  dis[0]
                }
                style={{ border: "2px solid #FE704B" }}
              >
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <div className="content">
                  <h3 className="font-[700] text-[30px] mb-2">Name</h3>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum possimus facere molestiae assumenda consequatur.
                    Doloribus vel sunt soluta iste odit? Cupiditate aliquid
                    alias temporibus debitis exercitationem, eos consectetur
                    blanditiis delectus!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className={"img absolute map_img lg:left-[60%] md:left-[60%] left-[60%] transition-all duration-1000 xs:ml-[-20px] 2xl:ml-0 xl:ml-[20px]  "+imgPosii[1]}>
              <img
                src="/image/Ellipse (1).png"
                alt=""
                className="md:w-[50px] !w-[100px]  hover:brightness-125 hover:scale-105"
                onClick={(e) => {handaleDis(1) ; e.stopPropagation();}}
              />
            </div>
            <div className="animation hidden lg:block">
              <div
                className={
                  "animation_box text-center p-4 pt-32 absolute top-[20%] left-[65%] z-10  bg-white w-[300px] rounded-lg  " +
                  dis[1]
                }
                style={{ border: "2px solid #FE704B" }}
              >
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <div className="content">
                  <h3 className="font-[700] text-[30px] mb-2">Name</h3>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum possimus facere molestiae assumenda consequatur.
                    Doloribus vel sunt soluta iste odit? Cupiditate aliquid
                    alias temporibus debitis exercitationem, eos consectetur
                    blanditiis delectus!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className={"img absolute map_img md:top-[424px] top-[300px] md:left-[20%] left-[20%] lg:left-[25%] transition-all duration-1000 xs:ml-[-20px] 2xl:ml-0 xl:ml-[20px] "+imgPosii[2]}>
              <img
                src="/image/Ellipse (2).png"
                alt=""
                className="md:!w-[150px] w-[100px]  hover:brightness-125 hover:scale-105"
                onClick={(e) => {handaleDis(2); e.stopPropagation();}}
              />
            </div>
            <div className="animation hidden lg:block">
              <div
                className={
                  "animation_box text-center p-4 pt-32 absolute top-[50%] left-[2%]  bg-white w-[300px] rounded-lg  " +
                  dis[2]
                }
                style={{ border: "2px solid #FE704B" }}
              >
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <div className="content">
                  <h3 className="font-[700] text-[30px] mb-2">Name</h3>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum possimus facere molestiae assumenda consequatur.
                    Doloribus vel sunt soluta iste odit? Cupiditate aliquid
                    alias temporibus debitis exercitationem, eos consectetur
                    blanditiis delectus!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main_box">
            <div className={"img absolute map_img md:top-[392px] top-[250px] lg:left-[70%] md:left-[70%] left-[70%] transition-all duration-1000 xs:ml-[-20px] 2xl:ml-0 xl:ml-[20px] "+imgPosii[3]}>
              <img
                src="/image/Ellipse (3).png"
                alt=""
                className="md:!w-[150px] w-[100px]  hover:brightness-125 hover:scale-105"
                onClick={(e) => {handaleDis(3); e.stopPropagation(); }}
              />
            </div>
            <div className="animation hidden lg:block">
              <div
                className={
                  "animation_box text-center p-4 pt-32 absolute top-[40%] left-[45%] bg-white w-[300px] rounded-lg " +
                  dis[3]
                }
                style={{ border: "2px solid #FE704B" }}
              >
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <div className="content">
                  <h3 className="font-[700] text-[30px] mb-2">Name</h3>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum possimus facere molestiae assumenda consequatur.
                    Doloribus vel sunt soluta iste odit? Cupiditate aliquid
                    alias temporibus debitis exercitationem, eos consectetur
                    blanditiis delectus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPage;
