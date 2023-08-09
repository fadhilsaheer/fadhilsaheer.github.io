import type React from 'react';
import type { IconType } from 'react-icons';

interface Props {
  link: string;
  Icon: IconType;
  title: string;
}

export const SocialIcon: React.FC<Props> = ({ link, Icon, title }) => {
  return (
    <a href={link} className='group'>
      <div className='flex items-center space-x-2'>
        <div className='flex justify-center sm:mb-0 sm:block'>
          <div className='rounded-lg bg-gradient-to-tl from-purple-500/80 to-rose-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1'>
            <Icon className='w-[18px] transform text-rose-100 transition delay-100 duration-500 ease-out group-hover:scale-110' />
          </div>
        </div>
        <div className='hidden sm:block'>{title}</div>
      </div>
    </a>
  );
};
