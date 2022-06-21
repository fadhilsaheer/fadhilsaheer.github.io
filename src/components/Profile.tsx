import React from 'react';
import { Avatar, Center } from '@chakra-ui/react';

export const Profile: React.FC = () => {
  return (
    <div className='relative'>
      <img
        src='/assets/computer.jpg'
        alt='Wall'
        className='w-full h-40 object-cover mt-5 rounded'
      />
      <Center>
        <Avatar
          src='/assets/me.jpg'
          size='xl'
          className='absolute border-4 border-teal-400'
          name='Fadhil'
        />
      </Center>
    </div>
  );
};
