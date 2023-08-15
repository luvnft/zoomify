import React from 'react';
import HomeBtn from '../button/HomeBtn';

const HomeCard = () => {
  return (
    <div className='bg-[#1F1D1D] w-[100%] h-[55%] relative bottom-0 
      overflow-hidden rounded-[40px] rounded-b-none'>
      <div className='justify-center items-center ml-[5%] mr-[5%] text-white
        font-bold text-center pt-4 text-[23px] leading-9 mb-5'>
        <p>Welcome</p>
        <p className='text-[15px]'>Get Started With Your Account</p>
      </div>

      <div className='justify-center items-center inset-0 relative mb-6'>
        <HomeBtn value={"Join Meeting"} width={90} height={65} />
        <HomeBtn value="Sign in" width={80} height={65} />
        <HomeBtn value="Sign up" width={70} height={65} />
      </div>
    </div>
  );
}

export default HomeCard;
