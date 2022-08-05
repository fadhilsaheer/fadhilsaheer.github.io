import React, { PropsWithChildren } from 'react';
import { useWindowScroll } from 'react-use';

type ReactComponent<Props = {}> = React.FC<PropsWithChildren<Props>>;

const GradientBackground = () => {
  const { y } = useWindowScroll();

  return (
    <>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div
          className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] will-change-transform"
          style={{
            transform: `translateY(${Math.min(y / 3, 167)}px)`,
          }}
        ></div>
      </div>
    </>
  );
};

interface Props {
  Navbar: React.ReactNode | React.ReactNode[];
}

export const Layout: ReactComponent<Props> = ({ children, Navbar }) => {
  return (
    <div className='h-full bg-gray-900 antialiased selection:bg-purple-500/90 selection:text-white'>
      <svg
        className='pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light'
        width='100%'
        height='100%'
      >
        <filter id='pedroduarteisalegend'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.80'
            numOctaves='4'
            stitchTiles='stitch'
          />
        </filter>
        <rect
          width='100%'
          height='100%'
          filter='url(#pedroduarteisalegend)'
        ></rect>
      </svg>

      {Navbar}

      <main className='relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] px-4 pt-36 sm:pt-48 text-lg text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3'>
        {children}
      </main>

      <GradientBackground />
    </div>
  );
};
