import React from 'react'

const First_buy = () => {
  return (
  <section className='scroll xl:h-[300px] xl:mt-[200px] mt-[100px]'>
    <div className="container_custom h-full relative">
      <div className="con relative">
        {/* First Div */}
        <div className="p_1 w-[110%] xl:h-[120px] h-[90px] bg-[#FFF4F1] rotate-[12deg] hidden translate-x-[-50px] absolute top-[40px] z-0 pl-[66px] xl:flex items-center" style={{border: "1px dashed #FE704B"}}> 
          <marquee behavior="" direction="" className="h-full">
            <div className="flex items-center !h-full xl:mt-6 mt-4">
              <img src="../asset/Group.png" alt="" className='ml-10 xl:w-auto w-[60px]' />
              <span className='xl:text-[48px] text-[40px]  font-[500] ml-10 leading-[15px]'>Up to 50 %</span>
              <span className='bg_with_out_text ml-10 !xl:text-[48px] !text-[40px]'>Get Existing Discount</span>
              <span className='xl:text-[48px] text-[40px]  font-[500] ml-10 leading-[15px]'>Get Existing Discount</span>
              <span className='xl:text-[48px] text-[40px]  font-[500] ml-10 leading-[15px]'>Up to 50 %</span>
            </div>
          </marquee>
        </div>
        {/* Second Div */} 
        <div className="p_2 xl:w-[110%] xl:h-[120px] h-[90px] bg-[#FFF4F1] xl:rotate-[-12deg] xl:translate-x-[-50px] xl:absolute xl:top-[40px] z-10 flex  items-center xl:pl-[80px]" style={{border: "1px dashed #FE704B"}}>
          <marquee behavior="" direction="right" className="" >
            <div className="flex  items-center pl-[80px] h-full">
              <img src="../asset/Group.png" alt="" />
              <span className='bg_with_out_text ml-10 !xl:text-[48px] !text-[40px]'>On your First Buying </span>
              <span className='xl:text-[48px] text-[40px] font-[500] ml-10 leading-[15px]'>Up to 50 %</span>
              <img src="../asset/Group.png" className='ml-10 xl:w-auto w-[60px]' alt="" />
              <span className='xl:text-[48px] text-[40px] font-[500] ml-10 leading-[15px] bg_with_out_text'>On your First Buying </span>
              <span className='xl:text-[48px] text-[40px] font-[500] ml-10 leading-[15px]'>Up to 50 %</span>
            </div>
          </marquee>
        </div>
    </div>
</div>

  </section>
  )
}

export default First_buy