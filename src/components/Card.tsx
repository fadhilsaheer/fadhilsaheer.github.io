import React from 'react';

interface Props {
  title: string;
  link: string;
  substring: string;
  description: string;
  image?: any; // can be a file/image or direct image
}

export const Card: React.FC<Props> = ({
  title,
  link,
  substring,
  description,
  image,
}) => {
  return (
    <a href={link}>
      <div className='cursor-pointer group w-full hover:opacity-80 rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium'>
        <div className='flex w-full'>
          {image && <img src={image} alt={title} className='w-14 mr-5' />}
          <div className='grow'>
            <h3 className='text-xl font-medium text-rose-100/80 group-hover:underline underline-offset-4'>
              {title}
            </h3>
            <p className='text-lg text-rose-100/50'>{substring}</p>
          </div>
        </div>
        <p className='mt-5 text-xl text-rose-100/80'>{description}</p>
      </div>
    </a>
  );
};
