import React from 'react'

const MapPage = () => {
  return (
    <section className="map h-[695px] relative mb-[20px] max-w-full">
        <div className="container">
            <div className="con">
                <div className="img absolute xl:left-[10.2%] top-[57px] lg:left-[15%] md:left-[10%] left-[10%]">
                    <img src="/image/Ellipse.png" alt="" className='md:w-full w-[80%] hover:brightness-125 hover:scale-105' />
                    <div className="">

                    </div>
                </div>
                <div className="img absolute top-[55px] xl:left-[52%] lg:left-[60%] md:left-[60%] left-[60%]">
                    <img src="/image/Ellipse (1).png" alt="" className='md:w-full w-[80%]  hover:brightness-125 hover:scale-105' />
                </div>
                <div className="img absolute md:top-[424px] top-[300px] xl:left-[17.76%] lg:left-[25%] md:left-[20%] left-[20%]">
                    <img src="/image/Ellipse (3).png" alt="" className='md:w-full w-[80%]  hover:brightness-125 hover:scale-105' />
                </div>
                <div className="img absolute md:top-[392px] top-[250px] xl:left-[62.5%] lg:left-[70%] md:left-[70%] left-[70%]">
                    <img src="/image/Ellipse (4).png" alt="" className='md:w-full w-[80%]  hover:brightness-125 hover:scale-105' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MapPage;