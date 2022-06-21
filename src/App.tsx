import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { getAge } from './utils/helper';
import { Profile } from './components/Profile';
import { Socials } from './components/Socials';

export const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Heading mt={14} className='text-2xl'>
        Fadhil Saheer⚡
      </Heading>
      <Text className='text-lg' mt={2}>
        Professional idiot, {getAge()} y/o, Passionate developer.
      </Text>
      <Socials />
    </Container>
  );
};
