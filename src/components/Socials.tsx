import React from 'react';
import { SocialButton } from './SocialButton';
import { SiGmail } from 'react-icons/si';
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaDev,
  FaTelegram,
  FaMedium,
} from 'react-icons/fa';
import { Grid } from '@chakra-ui/react';

export const Socials: React.FC = () => {
  return (
    <div className='mt-5 mb-5'>
      <SocialButton
        title='Github'
        link='https://github.com/fadhilsaheer'
        colorScheme='gray'
        Icon={FaGithub}
      />
      <SocialButton
        title='Twitter'
        link='https://twitter.com/fadhilsaheer'
        colorScheme='twitter'
        Icon={FaTwitter}
      />
      <SocialButton
        title='Instagram'
        link='https://instagram.com/fadhilsaheer'
        colorScheme='pink'
        Icon={FaInstagram}
      />
      <SocialButton
        title='Discord'
        link='https://discord.com/users/733166402567012363'
        colorScheme='purple'
        Icon={FaDiscord}
      />
      <SocialButton
        title='Telegram'
        link='https://t.me/fadhilsaheer'
        colorScheme='telegram'
        Icon={FaTelegram}
      />
      <SocialButton
        title='Gmail'
        link='mailto:fadhilsaheer@gmail.com'
        colorScheme='red'
        Icon={SiGmail}
      />
      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        <SocialButton
          link='https://medium.com/@fadhilsaheer'
          colorScheme='gray'
          title='Medium'
          Icon={FaMedium}
        />
        <SocialButton
          link='https://dev.to/fadhilsaheer'
          colorScheme='gray'
          title='Dev.to'
          Icon={FaDev}
        />
      </Grid>
    </div>
  );
};
