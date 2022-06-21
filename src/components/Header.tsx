import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';
import { getRandomLink } from '../utils/socialLinks';
import { Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react';

export const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mt={8} alignItems='center' justifyContent='space-between'>
      <a href={getRandomLink()}>
        <Heading
          size='sm'
          className='cursor-pointer hover:opacity-70 transition-all duration-200'
          fontWeight='medium'
        >
          ☜(ﾟヮﾟ☜)
        </Heading>
      </a>
      <IconButton
        aria-label='Toggle theme'
        icon={colorMode === 'light' ? <MdOutlineDarkMode /> : <FiSun />}
        onClick={toggleColorMode}
        variant='ghost'
      />
    </Flex>
  );
};
