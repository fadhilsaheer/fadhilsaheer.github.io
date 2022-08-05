import React from 'react';
import { Transition } from '@headlessui/react';
import { ProfileImage } from './ProfileImage';
import { Socials } from './Socials';

interface Props {
  show?: boolean;
}

export const Navbar: React.FC<Props> = ({ show }) => {
  return (
    <div className='pointer-events-none fixed top-6 z-30 w-full grid grid-cols-[1fr,min(640px,100%),1fr] px-4'>
      <Transition
        className='pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]'
        enter='transition duration-100 ease-in-out'
        show={show}
        enterFrom='opacity-0 scale-90'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in-out'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-6'>
            <ProfileImage size='small' />
          </div>
          <Socials hideTitle />
        </div>
      </Transition>
    </div>
  );
};
