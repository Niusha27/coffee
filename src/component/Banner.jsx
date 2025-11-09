import React from 'react';
import coffeeImg from "../assets/img/banner.png"
import coffeeBlast from "../assets/img/coffee_blast.png"



const Banner = () => {
    return (
        <div className='relative  mt-[15vh] flex flex-col items-center  md:flex-row  ' >
            {/*Img Section */}
            <div className='flex justify-center md:w-1/2 '  >
                <img
                    className='w-[60%] h-[auto] object-contain'
                    src={coffeeImg}
                    alt='کافه امضا'
                />
            </div>
            {/*Content Section */}
            <div className='text-center ml-5 md:text-right p-4 md:w-1/2' >
                <h2 className='text-2xl md:3xl lg:text-4xl text-amber-950 mb-5' >به دنبال بهترین قهوه باشید</h2>
                <p className='text-sm md:text-base ml-60px lg:text-lg text-gray-600 mb-6' >قهوه یکی از محبوب‌ترین نوشیدنی‌های جهان است که 
                    از دانه‌های گیاه قهوه تهیه می‌شود.
                     این نوشیدنی با عطر و طعم بی‌نظیر خود، قرن‌هاست که بخش جدایی‌ناپذیری 
                    از زندگی روزمره مردم در سراسر جهان است. قهوه علاوه بر انرژی‌بخشی،
                     سرشار از آنتی‌اکسیدان‌هاست که می‌تواند فوایدی برای سلامت قلب
                     و مغز داشته باشد. روش‌های تهیه قهوه متنوع هستند؛ 
                    از اسپرسوی غلیظ و پرانرژی گرفته تا قهوه‌های دمی
                     و قهوه ترک که هر کدام طعم و ویژگی منحصربه‌فردی دارند.
                     این نوشیدنی نه تنها به عنوان راهی برای شروع روز،
                     بلکه به عنوان یک فرصت برای لذت بردن و آرامش نیز شناخته می‌شود.</p>
                     <button  className='mx-2 bg-cream px-4 py-2 rounded-3xl text-gray-950  shadow-sm shadow-cream border-none' >
                            ثبت سفارش
                    </button>
            </div>
            {/*blast Section */}
            <div className='absolute left-0 bottom-[-50px] md:bottom-[-100px] ' >
                <img className='w-[30vh] lg:w-[50vh] '  src={coffeeBlast} />
            </div>

        </div>
    );
}

export default Banner;
