import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer relative overflow-hidden">
      <div className="container_custom">
        <div className="con">
          <div className="dog_image hidden md:block">
            <img
              src="/image/image 42.png"
              alt=""
              className="mx-auto xl:mb-[-150px] xl:w-auto w-[80%] lg:mb-[-100px] mb-[-80px] transition-all  hover:brightness-125"
            />
          </div>
          <div className="main_footer md:flex py-[110px] bg-[#FFF5ED] lg:pl-[70px] justify-between lg:pr-[31px] px-[20px]">
            <div className="p_1">
              <div className="logo">
                <img src="/image/logo.png" alt="" />
              </div>
              <div className="p mt-[20px]">
                <p className="text-[12px] leading-[26px] font-[400] w-[220px] text-[#70717B]">
                  Aliquam pellentesque pellentesque neque vitae elementum.
                </p>
              </div>
              <div className="info mt-[41px]">
                <ul>
                  <li>
                    <a href="" className="flex gap-4 items-center  mb-[33px] hover:scale-[1.05] duration-300">
                      <CiMail className="text-[#FE704B] text-[24px]" />{" "}
                      <span className="text-[#656565]">
                        Ourstudio@hello.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex gap-4 items-center  mb-[33px] hover:scale-[1.05] duration-300">
                      <FiPhone className="text-[#FE704B] text-[24px]" />{" "}
                      <span className="text-[#656565]">+1 386-688-3295</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex gap-4 items-center hover:scale-[1.05] duration-300">
                      <IoLocationOutline className="text-[#FE704B] text-[24px]" />{" "}
                      <span className="w-[180px] text-[#656565]">
                        8819 Ohio St. South Gate, CA 90280
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p_2 text-center xl:block hidden ">
              <h2 className="relative w-[472px] leading-[100px] font-[600] text-[50px] text-[#000] hover:text-[#FE704B] group transition-all duration-500">
                Want To{" "}
                <span className="text-[#FE704B] group-hover:text-[#000] transition-colors duration-500">
                  Keep
                </span>{" "}
                Your{" "}
                <span className="text-[#FE704B] group-hover:text-[#000] transition-colors duration-500">
                  Pet
                </span>{" "}
                In, Our Canter?
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#FE704B] transition-all duration-300 group-hover:w-full"></span>
              </h2>

              <div className="btn text-center mt-[64px]">
                <button>
                  <a
                    href=""
                    className="py-[18px] px-[50px] text-white rounded-full text-[12px] font-[600] leading-[15px] mx-auto block bg-[#FE704B] hover:bg-[#E55C3A] hover:text-[#FFF]"
                  >
                    Book Now
                  </a>
                </button>
              </div>
            </div>
            <div className="p_3 md:mt-0 mt-[60px]">
              <span className="font-[600] text-[18px] xl:text-left md:text-right ml-auto block">Subscribe Now</span>
              <div className="p mt-[20px]">
                <p className="leading-[26px] font-[400] w-[420px] text-[#70717B] xl:text-left xl:mr-auto xl:ml-0 md:text-right md:ml-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat vero iure inventore
                </p>
              </div>
              <span className="text-[#70717B] mt-[28px] mb-2 block">
                Your Email
              </span>
              <div className="mail_box md:flex items-center gap-[13px]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                  className="p-4 pr-[105px] rounded-[15px]"
                  style={{ border: "1px solid #FE704B" }}
                />
                <button>
                  <a
                    href=""
                    className="py-[16px] md:mt-0 mt-4 px-[28px] text-white rounded-full text-[12px] font-[600] leading-[15px] mx-auto block bg-[#FE704B]"
                  >
                    Subscribe
                  </a>
                </button>
              </div>
              <div className="social_button flex gap-4 mt-[31px] ml-4 xl:justify-start md:justify-end">
                <button>
                  <a
                    href=""
                    className="p-[12px] text-white bg-[#FE704B] block rounded-full transform transition-all duration-300 ease-in-out hover:bg-[#E55C3A] hover:scale-110 hover:rotate-12 hover:text-[#FFF] hover:shadow-lg"
                  >
                    <FaInstagram />
                  </a>
                </button>
                <button>
                  <a
                    href=""
                    className="p-[12px] text-white bg-[#FE704B] block rounded-full transform transition-all duration-300 ease-in-out hover:bg-[#E55C3A] hover:scale-110 hover:rotate-12 hover:text-[#FFF] hover:shadow-lg"
                  >
                    <FaFacebookF />
                  </a>
                </button>
                <button>
                  <a
                    href=""
                    className="p-[12px] text-white bg-[#FE704B] block rounded-full transform transition-all duration-300 ease-in-out hover:bg-[#E55C3A] hover:scale-110 hover:rotate-12 hover:text-[#FFF] hover:shadow-lg"
                  >
                    <FaXTwitter />
                  </a>
                </button>
              </div>
            </div>
            <div className="p_bg absolute bottom-0 right-0 z-10 hover:right-[50px] hover:scale-110 transition-all duration-500 ease-in-out">
              <img
                src="/image/image 134.png"
                className="hover:brightness-90 hover:rotate-[-5deg]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
