import type React from 'react';
import { getYearDiffFromDate } from '../utils/getYearDiffFromDate';
import { ProfileImage } from './ProfileImage';
import { Socials } from './Socials';

export const About: React.FC = () => {
  return (
    <div>
      <div className='flex items-center space-x-6'>
        <ProfileImage size='large' />
        <div>
          <h1 className='text-3xl font-medium text-rose-100/80 sm:text-4xl'>
            Fadhil Saheer
          </h1>
          <h2 className='align-middle text-lg leading-6 text-rose-100/50'>
            Fullstack hobbyist developer.
          </h2>
        </div>
      </div>
      <article className='mt-9 text-xl text-rose-100/90'>
        Hello world, I'm {getYearDiffFromDate('08/23/2006')} y/o passionate
        developer from Kerala, India who loves to bring ideas to life. I love to
        develop applications using cutting edge tech.
      </article>
      <div className='mt-9'>
        <Socials />
      </div>
    </div>
  );
};
