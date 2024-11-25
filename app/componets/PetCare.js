'use client'

import React, { useState } from "react";

const PetCare = () => {
  const [btn1Css, setBtn1Css] = useState("bg-[#FE704B] text-white");
  const [btn2Css, setBtn2Css] = useState("text-[#FF9850]");
  const [btn3Css, setBtn3Css] = useState("text-[#FF9850]");
  const [disImg , setDisImg] = useState([]);
  
  const handleClick = (buttonId) => {
    if(buttonId == "All"){
      setBtn1Css("bg-[#FE704B] text-white");
      setBtn2Css("text-[#FF9850]");
      setBtn3Css("text-[#FF9850]");
      setDisImg(["block" , "block"]);
    }else if(buttonId == "Bathed"){
      setBtn1Css("text-[#FF9850]");
      setBtn2Css("bg-[#FE704B] text-white");
      setBtn3Css("text-[#FF9850]");
      setDisImg(["block" , "hidden"]);
    }else{
      setBtn1Css("text-[#FF9850]");
      setBtn2Css("text-[#FF9850]");
      setBtn3Css("bg-[#FE704B] text-white");
      setDisImg(["hidden" , "block"]);
    }

  };

  return (
    <section className="petcare pb-[76px]">
      <div className="container_custom">
        <div className="con">
          <div className="hedding">
            <div className="heddinge_main flex items-center gap-1 justify-center">
              <img
                src="/image/section-vec-l1 2.png"
                alt=""
                className="w-[24px] h-[36px]"
              />
              <h3 className="md:text-[48px] text-[36px] font-[700] md:leading-[60px] leading-[48px]">
                Petcare Gallery
              </h3>
              <img
                src="/image/section-vec-r1 2.png"
                alt=""
                className="w-[24px] h-[36px] mt-[10px]"
              />
            </div>
            <div className="content">
              <p className="text-[#A6A6A6] text-[16px] md:text-[18px] font-[400] leading-[28px] md:leading-[36px] max-w-[90%] md:w-[777px] mx-auto mt-[20px] md:mt-[35px] mb-[40px] md:mb-[90px] text-center">
                Conveniently customize proactive services leveraged without
                continualliery aggregate fricctionle ou wellies
              </p>
            </div>
          </div>
          <div className="content">
            <div className="choose_type flex flex-wrap justify-center md:gap-[36px] mb-[84px] gap-[20px] md:px-0 px-5">
              {/* All Button */}
              <div className="btn md:w-auto w-full">
                <button
                  className="md:w-auto w-full"
                  onClick={() => handleClick("All")}
                >
                  <a
                    className={"relative md:w-[195px] w-full h-[58px] flex items-center  justify-center text-[20px] font-[400] rounded-full border border-[#FE704B] transition-all duration-300 hover:bg-[#FF9850] hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#FE704B] before:scale-0 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-20 "+btn1Css}
                  >
                    All
                  </a>
                </button>
              </div>

              {/* Bathed Dog Button */}
              <div className="btn md:w-auto w-full">
                <button
                  className="md:w-auto w-full"
                  onClick={() => handleClick("Bathed")}
                >
                  <a
                    className={"relative md:w-[195px] w-full h-[58px] flex items-center justify-center  text-[20px] font-[400] rounded-full border border-[#FE704B] transition-all duration-300 hover:bg-[#FF9850] hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#FE704B] before:scale-0 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-20 text-[#FF9850] "+btn2Css}
                  >
                    Bathed dog
                  </a>
                </button>
              </div>

              {/* Beautiful Dog Button */}
              <div className="btn md:w-auto w-full">
                <button
                  className="md:w-auto w-full"
                  onClick={() => handleClick("Beautiful")}
                >
                  <a
                    className={"relative md:w-[195px] w-full h-[58px] flex items-center justify-center text-[20px] font-[400] rounded-full border border-[#FE704B] transition-all duration-300 hover:bg-[#FF9850] hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#FE704B] before:scale-0 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-20 text-[#FF9850] "+btn3Css }
                  >
                    Beautiful dog
                  </a>
                </button>
              </div>
            </div>

            <div className="gallary px-5">
              <div className={"box_1 flex gap-[40px] justify-center flex-wrap "+disImg[0]}>
                <img
                  src="/image/Rectangle 20.png"
                  alt=""
                  className="rounded-[20px] lg:w-[370px] md:w-[300px] w-full hover:scale-110"
                />
                <img
                  src="/image/Rectangle 14.png"
                  alt=""
                  className="rounded-[20px] lg:w-[370px] md:w-[300px] w-full hover:scale-110"
                />
                <img
                  src="/image/Rectangle 15.png"
                  alt=""
                  className="rounded-[20px] lg:w-[370px] md:w-[300px] w-full hover:scale-110"
                />
              </div>
              <div className={"box_2 flex gap-[40px] justify-center mt-[54px] flex-wrap "+disImg[1]}>
                <img
                  src="/image/Rectangle 4393.png"
                  alt=""
                  className="rounded-[20px] lg:w-[370px] md:w-[300px] w-full hover:scale-110"
                />
                <img
                  src="/image/Rectangle 18.png"
                  alt=""
                  className="rounded-[20px] lg:w-[370px] md:w-[300px] w-full hover:scale-110"
                />
                <img
                  src="/image/Rectangle 4395.png"
                  alt=""
                  className="rounded-[20px] lg:w-[370px] md:w-[300px] w-full hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCare;

{
  /* <button className="md:w-auto w-full" onClick={(() => handleClick("All"))}>
                  <a
                    className="block bg-[#FE704B] py-4 md:px-[84px] w-full text-white text-[20px] font-[400] rounded-full 
      relative overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#FE704B]"
                  >
                    All
                    <span className="absolute inset-0 border border-transparent rounded-full transition-all duration-300 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border before:border-[#FE704B] before:rounded-full before:transition-all before:duration-500 hover:before:w-full hover:before:h-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:border after:border-[#FE704B] after:rounded-full after:transition-all after:duration-500 hover:after:w-full hover:after:h-full"></span>
                  </a>
                </button> */
}
