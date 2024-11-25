import React from 'react'

const About_us = () => {
  return (
    <section className='about_us pb-[80px]'>
        <div className="container_custom 2xl:pl-[54px] 2xl:pr-[96px] lg:px-[40px] px-[20px]">
            <div className="con"> 
                <div className="headding mb-[70px]">
                    <div className="heddinge_main flex items-center gap-1 justify-center">
                        <img src="/image/section-vec-l1 2.png" alt="" className='w-[24px] h-[36px]' />
                        <h3 className='md:text-[48px] text-[36px] font-[700] md:leading-[60px] leading-[48px]' >About us</h3>
                        <img src="/image/section-vec-r1 2.png" alt="" className='w-[24px] h-[36px] mt-[10px]' />
                    </div>
                </div>
                <div className="content flex justify-between xl:flex-row flex-col-reverse gap-y-16">
                    <div className="p_1">
                        <h2 className='text-[#103559] md:text-[48px] text-[36px] font-[600] md:leading-[100px] leading-[48px] xl:w-[595px] lg:w-full md:w-[595px] w-full'>
                            Come To <span className='text-[#FE704B]' >Know</span> What We Have Done About Pets.
                        </h2>
                            <p className='xl:w-[650px] lg:w-full md:w-[650px] w-full text-[#A6A6A6] font-[400] text-[15px] leading-[35px] mt-[20px] 
                                lg:text-[15px] lg:leading-[35px]  // Keep unchanged for 1440px and above
                                md:text-[13px] md:leading-[28px]    // Adjust for medium screens (e.g., below 1440px)
                                sm:text-[12px] sm:leading-[24px] sm:w-[85%]'>
                            Pellentesque maximus augue orci, quis congue purus iaculison id. Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi amet diam. Cras eu odio sit amet ipsum cursus for that gone pellentesquea. thisaton Vestibulum ut aliquet risus. In hac habitasse plateajoa dictumst. Nuncet posuere scelerisque justo in accumsan.
                        </p>
                        <h2 className='text-[20px] font-[400] leading-[60px] mt-[20px]'>
                            We Think Working Process may <span className='text-[#FE704B]' >increase</span> mindset.
                        </h2>
                        <p className='xl:w-[650px] lg:w-full md:w-[650px] w-full leading-[35px] text-[15px] mt-[20px] mb-[50px] text-[#A6A6A6] font-[400]'>
                            Pellentesque maximus augue orci, quis congue purus iaculison id. Maecenas eu lorem quisesdoi massal molestie vulputate in sitagi amet diam. Cras eu odio sit amet ipsum cursus for that gone pellentesquea. thisaton Vestibulum ut aliquet risus. In hac habitasse plateajoa dictumst. Nuncet posuere scelerisque justo in accumsan.
                        </p>
                        <div className="btn">
  <button>
    <a
      href=""
      className="py-[18px] px-[62px] rounded-full text-[12px] font-[400] leading-[15px] 
        border border-[#FE704B] text-[#000] hover:border-[#FF5733] hover:text-[#FF5733] 
        hover:bg-[#FFF4F1] transition-all duration-300"
    >
      Based on <span className="text-[#FE704B] hover:text-[#FF5733]">20,921</span> review
    </a>
  </button>
</div>

                    </div>
                    <div className="p_2">
                        <div className="img">
                            <img src="/image/story-img1 1.png" alt=""  className='mx-auto hover:scale-105 duration-300'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About_us;