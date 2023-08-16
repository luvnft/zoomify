import React from 'react';
import { backbtn } from '../../../constants/icons';

const Nav = ({ value }) => {
  return (
    <div className='relative'>
      <button className='absolute top-0 mt-0 ml-5 items-center'>
        <img src={backbtn} alt="back button" className='w-[30px]' />
      </button>
      <div className='bg-[#2A2A2A8F] w-full max-h-[3.6vw] min-h-[50px] h-[8.1vw] text-white text-[25px] flex justify-center items-center font-medium text-center'>
        {value}
      </div>
    </div>
  );
};

export default Nav;
