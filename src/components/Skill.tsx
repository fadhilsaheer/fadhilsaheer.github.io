import React from 'react';

interface Props {
  icon: string;
  title: string;
  link: string;
}

export const Skill: React.FC<Props> = ({ icon, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <div className='cursor-pointer flex items-center overflow-hidden rounded-2xl bg-white/5 py-4 px-3 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium'>
        <img src={icon + '&color=000'} alt={title} className='w-7' />
        <p className='ml-2 text-xl'>{title}</p>
      </div>
    </a>
  );
};
