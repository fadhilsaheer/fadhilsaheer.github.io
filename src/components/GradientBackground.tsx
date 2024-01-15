import { useWindowScroll } from 'react-use/esm';

export const GradientBackground = () => {
  const { y } = useWindowScroll();

  return (
    <>
      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div
          className="h-screen bg-[url('https://res.cloudinary.com/dvsipt8rv/image/upload/v1705284893/public/bkoixwadnfiixki8zg1s.png')] bg-cover bg-center opacity-[0.3] will-change-transform"
          // style={{
          //   transform: `translateY(${Math.min(y / 3, 167)}px)`,
          //   borderImage:
          //     'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
          // }}
        ></div>
      </div>
    </>
  );
};

// import { useWindowScroll } from 'react-use/esm';

// export const GradientBackground = () => {
//   const { y } = useWindowScroll();

//   return (
//     <>
//       <div className='pointer-events-none absolute inset-0 overflow-hidden'>
//         <div
//           className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] will-change-transform"
//           style={{
//             transform: `translateY(${Math.min(y / 3, 167)}px)`,
//           }}
//         ></div>
//       </div>
//     </>
//   );
// };
