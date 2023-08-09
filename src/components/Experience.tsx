import type React from 'react';
import { Card } from './Card';

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
        <Card
          title='ClusterDev'
          substring='Nov 22 - now'
          link='https://clusterdev.com'
          image='/company/clusterdev.webp'
          description={'Software engineer \u{1F468}\u{200D}\u{1F4BB}'}
        />
        <Card
          title='Entvin'
          substring='Oct 22 - Nov 22'
          link='https://entvin.com'
          image='/company/entvin.webp'
          description={'Software engineer \u{1F468}\u{200D}\u{1F4BB}'}
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
