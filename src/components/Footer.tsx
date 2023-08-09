import type React from 'react';

interface Props {
  href: string;
  title: string;
}

const Link: React.FC<Props> = ({ href, title }) => {
  return (
    <a
      href={href}
      className='hover:underline hover:decoration-rose-300/30 hover:underline-offset-2 hover:text-rose-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'
    >
      {title}
    </a>
  );
};

export const Footer: React.FC = () => {
  return (
    <div className='mt-20 pb-36 text-base'>
      <div className='text-gray-500'>
        <div className='flex flex-col justify-between font-medium lg:flex-row'>
          <div className='flex space-x-5'>
            <Link
              href='https://discord.com/users/733166402567012363'
              title='Discord'
            />
            <Link
              href='https://www.linkedin.com/in/fadhilsaheer'
              title='Linkedin'
            />
            <Link href='https://t.me/fadhilsaheer' title='Telegram' />
            <Link href='https://dev.to/fadhilsaheer' title='Dev' />
          </div>
          <div className='space-x-5 pt-2 lg:pt-0'>
            <Link href='https://instagram.com/fadhilsaheer' title='Instagram' />
            <Link href='https://twitter.com/fadhilsaheer' title='Twitter' />
            <Link href='https://github.com/fadhilsaheer' title='Github' />
          </div>
        </div>
      </div>
      <p className='mt-8 text-gray-600'>
        Built with <Link href='https://vitejs.dev/' title='Vite' />,{' '}
        <Link href='https://reactjs.org/' title='React JS' /> and{' '}
        <Link href='https://tailwindcss.com' title='Tailwind' />
      </p>
    </div>
  );
};
