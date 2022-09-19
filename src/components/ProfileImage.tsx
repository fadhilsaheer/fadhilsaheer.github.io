import React from 'react';
import FadhilImage from '../assets/fadhil.webp';

interface Props {
  size: 'large' | 'small';
}

export const ProfileImage: React.FC<Props> = ({ size }) => {
  return (
    <a href='#home'>
      <div className='rounded-full cursor-pointer bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg ring-[5px] ring-purple-500/10 group transform transition ease-out hover:scale-105 hover:from-purple-700 hover:to-rose-400 hover:shadow-rose-500/25 active:translate-y-px'>
        <div className='rounded-full p-1'>
          <img
            src={FadhilImage}
            alt='Fadhil'
            className={`rounded-full ${size === 'large' ? 'w-16' : 'w-10'}`}
          />
        </div>
      </div>
    </a>
  );
};
