import React from 'react';
import { Avatar, Center } from '@chakra-ui/react';
import ComputerImage from '../computer.jpg';
import MeImage from '../me.jpg';

export const Profile: React.FC = () => {
  return (
    <div className='relative'>
      <img
        src={ComputerImage}
        alt='Wall'
        className='w-full h-40 object-cover mt-5 rounded'
      />
      <Center>
        <Avatar
          src={MeImage}
          size='xl'
          className='absolute border-4 border-teal-400'
          name='Fadhil'
        />
      </Center>
    </div>
  );
};
