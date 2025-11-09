import React from 'react';
import WhyImg1 from "../assets/img/why-1.png"
import WhyImg2 from "../assets/img/why-2.png"
import WhyImg3 from "../assets/img/why-3.png"
import WhyImg4 from "../assets/img/why-4.png"
import coffeeBlast from "../assets/img/coffee_blast-2.png"



const WhyUs = () => {
    return (
        <div className='relative' >
                <div>
                    <img src={coffeeBlast} className='absolute top-[-100px] w-[30vh] lg:w-[50vh]' />
                </div>

            <div className=' p-5 max-w-6xl mx-auto' >

                    <div className='text-center p-4' >
                        <h2 className='text-4xl text-amber-950' >چرا کافه امضا؟</h2>
                        <p className='text-sm text-gray-600' > با کافه امضا روزت رو بساز !</p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' >
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg1} />
                                <h4 className='text-2xl text-amber-900' >قهوه های سلطنتی</h4>
                                <p className='text-gray-700 text-sm' >با دانه های طلایی</p>
                            </div>
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg2} />
                                <h4 className='text-2xl text-amber-900' >کیفیت عالی</h4>
                                <p className='text-gray-700 text-sm' >ما بهترین کیفیت را فراهم میکنیم</p>
                            </div>
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg3} />
                                <h4 className='text-2xl text-amber-900' >فوق العاده</h4>
                                <p className='text-gray-700 text-sm' >قهوه ای شگفت انگیز تجربه کنید</p>
                            </div>
                            <div className='bg-[#FFF9F1] flex flex-col justify-center items-center px-2 py-4 mx-2 my-4 rounded-md border border-amber-500' >
                                <img src={WhyImg4} />
                                <h4 className='text-2xl text-amber-900 my-2' >قیمت مناسب</h4>
                                <p className='text-gray-700 text-sm my-4' >بهترین قهوه با کمترین قیمت !</p>
                            </div>
                            
                    </div>
                    <div className='text-center p-4 my-8' >
                    <p className='text-gray-700 text-sm my-2' >بهترین ایده ها با بهترین قهوه ها شروع میشوند</p>
                        <h4 className='text-3xl text-amber-950 my-2' > از امروز شروع کن</h4>
                    
                        <button  className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none my-8' >
                             به ما بپیوندید
                    </button>
                    </div>
            </div>
        </div>
    );
}

export default WhyUs;
