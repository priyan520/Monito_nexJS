import React from 'react';

const Our_service = () => {
  return (
    <div className="Our_service pt-[50px] pb-[130px]">
      <div className="container_custom px-4">
        <div className="con">
          {/* Heading Section */}
          <div className="hedding">
            <div className="heddinge_main flex items-center gap-2 justify-center flex-wrap">
              <img
                src="image/section-vec-l1 2.png"
                alt=""
                className="w-[24px] h-[36px]"
              />
              <h3 className="text-[36px] md:text-[48px] font-[700] leading-[48px] md:leading-[60px]">
                Our service
              </h3>
              <img
                src="image/section-vec-r1 2.png"
                alt=""
                className="w-[24px] h-[36px] mt-[10px]"
              />
            </div>
            <div className="content">
              <p className="text-[#A6A6A6] text-[16px] md:text-[18px] font-[400] leading-[28px] md:leading-[36px] max-w-[90%] md:w-[777px] mx-auto mt-[20px] md:mt-[35px] mb-[40px] md:mb-[90px] text-center">
                Check out our best service you can possibly order in building your company and don’t
                forget to ask via our email or our customer service if you are interested in our
                services.
              </p>
            </div>
          </div>
          {/* Services Section */}
          <div className="content flex flex-wrap gap-[20px] md:gap-[40px] justify-center">
  {[
    { img: "Frame.png", text: "Bird Supplies" },
    { img: "Frame (1).png", text: "Cat Supplies" },
    { img: "Frame (2).png", text: "Dog Supplies" },
    { img: "Frame (3).png", text: "Fish Supplies" },
    { img: "Frame (4).png", text: "Small Animal" },
  ].map((item, index) => (
    <div
      key={index}
      className="main_box w-full sm:w-[45%] md:w-[30%] lg:w-[20%] max-w-[300px]"
    >
      <div
        className="sub_box py-[24px] px-[24px] md:px-[48px] bg-[#FFF4F1] block rounded-[34px] 
        transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-[#FFE8E0]"
        style={{ boxShadow: "0px 0px 14px 0px #0000001A" }}
      >
        <img
          src={`/image/${item.img}`}
          alt=""
          className="mx-auto hover:scale-110 transition-transform duration-300"
        />
        <span className="text-[15px] block mt-[17px] font-[500] text-center hover:text-[#FE704B] transition-colors duration-300">
          {item.text}
        </span>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Our_service;
