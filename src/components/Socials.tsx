import React from 'react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from './SocialIcon';

interface Props {
  hideTitle?: boolean;
}

export const Socials: React.FC<Props> = ({ hideTitle }) => {
  return (
    <div className='flex items-center space-x-7 text-base font-medium leading-none text-rose-100/90 sm:text-lg'>
      <SocialIcon
        Icon={FaGithub}
        title='Github'
        link='https://github.com/fadhilsaheer'
        hideTitle={hideTitle}
      />
      <SocialIcon
        Icon={FaTwitter}
        title='Twitter'
        link='https://twitter.com/fadhilsaheer'
        hideTitle={hideTitle}
      />
      <SocialIcon
        Icon={FaInstagram}
        title='Instagram'
        link='https://instagram.com/fadhilsaheer'
        hideTitle={hideTitle}
      />
    </div>
  );
};
