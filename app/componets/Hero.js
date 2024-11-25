"use client";


const Hero = () => {
  
  return (
    <section className="hero pt-[110px]">
      <div className="container_custom md:pl-[53px] md:pr-[158px] px-[20px]">
        <div className="con">
          <div className="bg-img absolute top-0 right-0 -z-10 ">
            <img
              src="/image/Vector.png"
              className="xl:w-full md:w-[80%] ml-auto"
              alt=""
            />
          </div>
          <div className="side_bg_img absolute 3xl:left-[1780px] 2xl:left-[1140px] hidden lg:block xl:left-[670px] lg:left-[400px] xl:top-[200px] top-[150px]">
            <img src="/image/Vector 74.png" alt="" />
          </div>
          <div className="main_content flex items-start lg:flex-row flex-col-reverse justify-between">
            <div className="p_1 lg:mt-0 mt-5">
              <h1 className="3xl:text-[100px] xl:text-[64px] text-[48px] text-[#103559] 3xl:w-[800px] xl:w-[488px] lg:w-[400px] w-full capitalize font-[500]">
                Loving sitters take care of your pet
              </h1>
              <p className="3xl:text-[24px] 3xl:leading-[40px] 3xl:w-[1000px] xl:w-[512px] lg:w-[400px] w-full lg:leading-[30px] leading-[24px] lg:text-[16px] text-[14px] text-[#70717B] font-[400] mt-[11px]">
                We offer long-term and short-term boarding. Every Animal has
                their own private, spacious room and daily individual time in
                our large play room for even the fussiest feline.
              </p>
              <div className="ren mt-10 flex xl:gap-[66px] gap-[20px] xl:items-center flex-col xl:flex-row">
                <div className="p_1">
                  <button>
                    <a
                      href="#"
                      className="lg:py-[17px] lg:px-[25px] py-[12px] px-[20px] bg-[#0f3659] text-white rounded-full block tracking-wider lg:text-sm text-xs text-center hover:bg-[#FE704B] transition-all duration-300"
                    >
                      Shop Now
                    </a>
                  </button>
                </div>
                <div className="p_2 items-center flex lg:gap-[20px] gap-[10px]">
                  <div className="line h-[50px] w-[4px] bg-[#FF583D] rounded-full"></div>
                  <div className="box">
                    <div className="p_1 flex items-center lg:gap-2 gap-1">
                      <div className="img flex">
                        <img src="/image/Ellipse 6.png" alt="" className="hover:scale-105 duration-300" />
                        <img
                          src="/image/Ellipse 7.png"
                          alt=""
                          className="ml-[-10px] hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="content">
                        <h4 className="lg:text-[14px] text-[12px] lg:leading-[24px] leading-[20px]">
                          Our Experts
                        </h4>
                      </div>
                    </div>
                    <div className="p_2 mt-[10px]">
                      <p className="lg:text-[14px] text-[12px] lg:leading-[24px] leading-[20px] font-[400] lg:w-[284px] md:w-[250px] w-full">
                        Choose the services they love or start shopping now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p_2">
              <div className="img">
                <img
                  src="/image/dogs_img_1 1.png"
                  width={"610px"}
                  className="hover:scale-105 duration-300  transform hover:brightness-110"
                  alt=""
                />
              </div>
              <div className="imges_flote">
                <div className="img">
                  <img
                    src="/image/Ellipse 9.png"
                    className="absolute md:w-auto hover:scale-110 float-img2 w-[14%] 2xl:top-[11.57%] xl:top-[17%] xl:right-[13.91%] lg:top-[18%] lg:right-[5%]  right-[12%] top-[12%]"
                    width={"80px"}
                    alt=""
                  />
                  <img
                    src="/image/Ellipse 8.png"
                    className="absolute md:w-auto hover:scale-110 float-img w-[14%]  2xl:top-[34.91%] lg:top-[50%] top-[30%] right-[7.81%]"
                    width={"86px"}
                    alt=""
                  />
                  <img
                    src="/image/Ellipse 11.png"
                    className="absolute md:w-auto hover:scale-110 float-img2 w-[14%] 2xl:top-[58.15%] lg:top-[80%] right-[5.10%] top-[50%]"
                    width={"52px"}
                    alt=""
                  />
                  <img
                    src="/image/Ellipse 12.png"
                    className="absolute md:w-auto hover:scale-110 float-img w-[14%] top-[16.67%] 3xl:right-[35%] 2xl:right-[42.08%] xl:right-[57%] lg:right-[65%] md:right-[40%] md:left-auto left-[5%]"
                    width={"36px"}
                    alt=""
                  />
                  <img
                    src="/image/Ellipse 10.png"
                    className="absolute md:w-auto hover:scale-110 float-img2 w-[14%] top-[36.39%] 3xl:right-[32%] 2xl:right-[40.83%] xl:right-[55%] lg:right-[53%] md:right-[35%] md:left-auto left-[10%] "
                    width={"57px"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
