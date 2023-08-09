import type React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa/index';
import { SocialIcon } from './SocialIcon';

export const Socials: React.FC = () => {
  return (
    <div className='flex items-center space-x-7 text-base font-medium leading-none text-rose-100/90 sm:text-lg'>
      <SocialIcon
        Icon={FaGithub}
        title='Github'
        link='https://github.com/fadhilsaheer'
      />
      <SocialIcon
        Icon={FaTwitter}
        title='Twitter'
        link='https://twitter.com/fadhilsaheer'
      />
      <SocialIcon
        Icon={FaInstagram}
        title='Instagram'
        link='https://instagram.com/fadhilsaheer'
      />
    </div>
  );
};
