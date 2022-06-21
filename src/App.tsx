import React from 'react';
import { Avatar, Center, Container, Heading, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { getAge } from './utils/helper';
import { Profile } from './components/Profile';

export const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Heading mt={10} className='text-2xl'>
        Fadhil Saheer⚡
      </Heading>
      <Text mt={2}>
        Professional idiot, {getAge()} y/o, Passionate developer.
      </Text>
    </Container>
  );
};
