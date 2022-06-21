import React from 'react';
import { Button, DarkMode } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface SocialButtonProps {
  title?: string;
  Icon: IconType;
  link: string;
  className?: string;
  iconClassName?: string;
  mt?: number;
  colorScheme?:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram'
    | undefined;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  title,
  link,
  Icon,
  colorScheme,
  className,
  iconClassName,
  mt,
}) => {
  return (
    <a href={link}>
      <Button
        size='lg'
        width='full'
        className={className}
        colorScheme={colorScheme}
        mt={mt ? mt : 3}
      >
        {title} <Icon className={`ml-2 ${iconClassName}`} />
      </Button>
    </a>
  );
};
