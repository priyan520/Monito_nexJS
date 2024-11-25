import React from 'react'

const Testimonial = () => {
  return (
   <section className='testimonial'>
    <div className="containeer">
        <div className="con">
            <div className="hedding">
                <div className="heddinge_main flex items-center gap-1 justify-center">
                    <img src="/image/section-vec-l1 2.png" alt="" className='w-[24px] h-[36px]' />
                    <h3 className='md:text-[48px] !text-[30px] font-[700] md:leading-[60px] leading-[48px]' >Client Testimonials</h3>
                    <img src="/image/section-vec-r1 2.png" alt="" className='w-[24px] h-[36px] mt-[10px]' />
                </div>
                <div className="content">
                    <p className='text-[#A6A6A6] text-[16px] md:text-[18px] font-[400] leading-[28px] md:leading-[36px] max-w-[90%] md:w-[777px] mx-auto mt-[20px] md:mt-[35px] mb-[40px] md:mb-[90px] text-center'>Check out our best service you can possibly order in building your company and don’t forget to ask via our email or our customer service if you are interested in our services</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Testimonial;