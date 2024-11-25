import React from 'react'

const Special = () => {
  return (
    <section className="special md:py-[120px] py-[60px] relative xl:h-[615px] flex items-center xl:justify-end justify-center my-[50px] xl:pr-[54px] xl:pl-0" style={{background: "linear-gradient(90deg, #FFFFFF 0%, #FED681 100%)"
    }}>
        <div className="container_custom">
            <div className="con flex xl:justify-end items-center  flex-col">
                <div className="p_1">
                  <img src="image/image 142.png" className='xl:absolute xl:left-[-38px] xl:top-[200px] max-w-full duration-300 hover:brightness-90' alt="" />
                </div>
                <div className="p_2 xl:mt-0 md:mt-[100px] mt-[50px] md:px-0 px-[20px]">
                    <img src="image/Special Hot Deals.png" className='mx-auto max-w-full' alt="" />
                    <h2  className='md:mt-[50px] mt-[30px] md:text-[40px] text-[30px] font-[600] md:leading-[80px] leading-[60px] md:w-[532px] text-center mx-auto max-w-full'>GET 10% OFF OFFER ON PET FOOD PRODUCTS</h2>
                    <p className='md:w-[638px] mt-[20px] md:mt-[40px] text-[#272727] text-[15px] font-[400] max-w-full md:leading-[40px] leading-[30px] xl:text-start text-center'>Praesent sapien dolor, iaculis dignissim ipsum eget, sodales lacinia nisl. Quisque pharetra consequat odio at sollicitudin. Proin et bibendum odio, non tincidunt risus. Duis nec ex volutpat, faucibus nunc vel, iaculis erat. Aliquam eleifend dignissim odio.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Special; 