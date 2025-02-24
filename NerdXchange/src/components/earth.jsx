
// import { useState, useEffect } from 'react';
// import Spline from '@splinetool/react-spline';
// import ChatBot from './chatbot';
// import { SparklesPreview } from './logo';
// import { FloatingDockDemo } from './navbar';
// import { ShootingStars } from "../components/ui/shooting-stars";
// import { StarsBackground } from "../components/ui/stars-background";

// export default function Earth() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Adjust the time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   const loaderStyle = {
//     display: 'grid',
//     width: '75px',
//     aspectRatio: '1',
//   };

//   const loaderBeforeAfterStyle = {
//     content: '""',
//     gridArea: '1 / 1',
//     width: '35px',
//     aspectRatio: '1',
//     boxShadow: '0 0 0 3px #fff inset',
//     animation: 'l8 2s infinite alternate',
//   };

//   const loaderBeforeStyle = {
//     ...loaderBeforeAfterStyle,
//     filter: 'drop-shadow(40px 40px 0 #fff)',
//   };

//   const loaderAfterStyle = {
//     ...loaderBeforeAfterStyle,
//     margin: '0 0 0 auto',
//     filter: 'drop-shadow(-40px 40px 0 #fff)',
//     animationDelay: '-1s',
//   };

//   const keyframesStyle = `
//     @keyframes l8 {
//       0%,10%   {border-radius: 0;}
//       30%,40%  {border-radius: 50% 0;}
//       60%,70%  {border-radius: 50%;}
//       90%,100% {border-radius: 0 50%;}
//     }
//   `;

//   return (
//     <div className="rounded-md bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1C0730FF,_#1D0734FF)] h-screen flex flex-col items-center justify-center relative w-full">
//       <style>{keyframesStyle}</style>
//       {isLoading ? (
//         <div className="flex items-center justify-center h-full">
//           <div style={loaderStyle}>
//             <div style={{ ...loaderBeforeStyle }} />
//             <div style={{ ...loaderAfterStyle }} />
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* FloatingDockDemo placed at the extreme top-right */}
//           <div className="absolute top-4 left-10 z-30">
//             <FloatingDockDemo />
//           </div>

//           {/* The Spline Earth component */}
//           <Spline scene="https://prod.spline.design/S-Oft8pcK65rU28M/scene.splinecode" className="z-10" />

//           {/* SparklesPreview stacked on top */}
//           <div className="absolute inset-x-0 top-20 z-20 pointer-events-none">
//             <SparklesPreview />
//           </div>

//           <ShootingStars />
//           <StarsBackground />

//           {/* Blurred bar at the bottom */}
//           <div className="absolute bottom-4 right-0 w-72 h-16 bg-indigo-950 bg-opacity-10 backdrop-blur-md z-10" />

//           {/* ChatBot positioned at bottom right */}
//           <ChatBot />
//         </>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import ChatBot from './chatbot';
import { SparklesPreview } from './logo';
import { FloatingDockDemo } from './navbar';
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

export default function Earth() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const loaderStyle = {
    display: 'grid',
    width: '75px',
    aspectRatio: '1',
  };

  const loaderBeforeAfterStyle = {
    content: '""',
    gridArea: '1 / 1',
    width: '35px',
    aspectRatio: '1',
    boxShadow: '0 0 0 3px #fff inset',
    animation: 'l8 2s infinite alternate',
  };

  const loaderBeforeStyle = {
    ...loaderBeforeAfterStyle,
    filter: 'drop-shadow(40px 40px 0 #fff)',
  };

  const loaderAfterStyle = {
    ...loaderBeforeAfterStyle,
    margin: '0 0 0 auto',
    filter: 'drop-shadow(-40px 40px 0 #fff)',
    animationDelay: '-1s',
  };

  const keyframesStyle = `
    @keyframes l8 {
      0%,10%   {border-radius: 0;}
      30%,40%  {border-radius: 50% 0;}
      60%,70%  {border-radius: 50%;}
      90%,100% {border-radius: 0 50%;}
    }
  `;

  return (
    <div 
      className="rounded-md bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1C0730FF,_#1D0734FF)] w-full h-full flex flex-col items-center justify-center relative" 
      style={{ overflow: 'hidden', height: '100vh', margin: 0 }}
    >
      <style>{keyframesStyle}</style>
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div style={loaderStyle}>
            <div style={{ ...loaderBeforeStyle }} />
            <div style={{ ...loaderAfterStyle }} />
          </div>
        </div>
      ) : (
        <>
          {/* FloatingDockDemo placed at the extreme top-right */}
          <div className="absolute top-4 left-10 z-30">
            <FloatingDockDemo />
          </div>

          {/* The Spline Earth component */}
          <Spline scene="https://prod.spline.design/S-Oft8pcK65rU28M/scene.splinecode" className="z-10 w-full h-full" style={{ minHeight: '100vh' }} />

          {/* SparklesPreview stacked on top */}
          <div className="absolute inset-x-0 top-20 z-20 pointer-events-none">
            <SparklesPreview />
          </div>

          <ShootingStars />
          <StarsBackground />
          <ChatBot />
          {/* Blurred bar at the bottom */}
          <div className="fixed bottom-4 right-0 w-72 h-16 bg-indigo-950 bg-opacity-10 backdrop-blur-md z-10" />

          {/* ChatBot positioned at bottom right */}
       
        </>
      )}
    </div>
  );
}
