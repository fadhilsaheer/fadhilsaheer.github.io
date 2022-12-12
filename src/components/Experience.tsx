import React from 'react';
import ClusterDevImage from '../assets/company/clusterdev.webp';
import EntvinImage from '../assets/company/entvin.webp';

export const Experience: React.FC = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-2xl sm:text-3xl font-medium text-rose-100/80'>
        Experience
      </h2>
      <p className='mt-7 text-xl text-rose-100/50'>
        Wonderful companies I worked with.
      </p>
      <div className='mt-9 grid grid-cols-1 gap-7'>
        <ExperienceObject
          name='ClusterDev'
          time='Nov 22 - now'
          website='https://clusterdev.com'
          image={ClusterDevImage}
          job={'Software engineer intern \u{1F468}\u{200D}\u{1F4BB}'}
        />
        <ExperienceObject
          name='Entvin'
          time='Oct 22 - Nov 22'
          website='https://entvin.com'
          image={EntvinImage}
          job={'Software engineer intern \u{1F468}\u{200D}\u{1F4BB}'}
        />
      </div>
      <div className='mt-16'>
        <div>
          <h2 className='text-2xl sm:text-3xl font-medium text-rose-100/80'>
            Wanna work with me ?
          </h2>
          <p className='my-7 text-xl text-rose-100/50'>
            Feel free to connect with me anyway you like, I would love to meet
            new people.
          </p>
          <a
            href='mailto:fadhilsaheer@gmail.com'
            className='text-xl text-rose-100/80 underline underline-offset-8 transition-all duration-200 hover:text-rose-100/50'
          >
            fadhilsaheer@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

interface Props {
  name: string;
  website: string;
  image: string;
  time: string;
  job: string;
}

export const ExperienceObject: React.FC<Props> = ({
  name,
  website,
  image,
  time,
  job,
}) => {
  return (
    <a href={website}>
      <div className='cursor-pointer group w-full hover:opacity-80 rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium'>
        <div className='flex items-center'>
          <img src={image} alt='' className='w-16 mr-5' />
          <div>
            <h3 className='text-xl font-medium text-rose-100/80 group-hover:underline underline-offset-4'>
              {name}
            </h3>
            <p className='text-lg text-rose-100/50'>{time}</p>
          </div>
        </div>
        <p className='mt-5 text-xl text-rose-100/80'>{job}</p>
      </div>
    </a>
  );
};
