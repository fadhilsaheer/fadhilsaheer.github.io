import React from 'react';
import { useIntersection } from 'react-use/esm';
import { Transition as HeadlessTransition } from '@headlessui/react';

interface Props {
  show?: boolean;
  refId: string;
  children: React.ReactNode;
}

export const Transition: React.FC<Props> = ({
  children,
  show = false,
  refId,
}) => {
  const intersectionRef = React.useRef(document.getElementById(refId));
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '-100px',
  });

  let showNav = show;
  if (intersection && !intersection.isIntersecting) {
    showNav = true;
  }

  return (
    <HeadlessTransition
      className='pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 shadow-surface-glass backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]'
      enter='transition duration-100 ease-in-out'
      show={showNav}
      enterFrom='opacity-0 scale-90'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in-out'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      {children}
    </HeadlessTransition>
  );
};
