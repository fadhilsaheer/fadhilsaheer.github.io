import { useWindowScroll } from 'react-use';

export const GradientBackground = () => {
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
