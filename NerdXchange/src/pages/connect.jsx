
// import PropTypes from 'prop-types'; // Import PropTypes
// import { FloatingDockDemo } from "../components/navbar";
// import { ShootingStars } from "../components/ui/shooting-stars";
// import { StarsBackground } from "../components/ui/stars-background";
// import { BentoGridDemo } from "./bento"; // Import BentoGridDemo component

// function Explore({ userItems }) {
//   return (
//     <div className="rounded-md bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1A072DFF,_#220A3BFF)] h-screen flex flex-col items-center justify-center relative w-full">
//       {/* Background Effects */}
//       <div className="top-0 left-0 w-full h-full z-0">
//         {/* Shooting Stars and Stars Background should be fixed */}
//         <ShootingStars />
//         <StarsBackground />
//       </div>

//       {/* Main Content Section */}
//       <div className="relative z-10 h-full w-screen flex flex-col">
//         {/* Navbar Section */}
//         <div className="absolute top-0 left-0 z-30 w-full">
//           <FloatingDockDemo />
//         </div>

//         {/* Scrollable BentoGrid Section */}
//         <div
//           className="flex-1 mt-[80px]"
//           style={{
//             overflowY: "auto",
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
       
//           }}
//         >
//           <BentoGridDemo userItems={userItems} /> {/* Pass user items as props */}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Prop validation for Explore component
// Explore.propTypes = {
//   userItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       description: PropTypes.string,
//       header: PropTypes.node,
//       icon: PropTypes.node,
//     })
//   ),
// };

// export default Explore;
import PropTypes from 'prop-types'; // Import PropTypes
import { FloatingDockDemo } from "../components/navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import { BentoGridDemo } from "./bento"; // Import BentoGridDemo component

function Explore({ userItems }) {
  return (
    <div className="rounded-md bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1A072DFF,_#220A3BFF)] h-screen flex flex-col items-center justify-center relative w-full">
      {/* Background Effects */}
      <div className="top-0 left-0 w-full h-full absolute z-0">
        {/* Shooting Stars and Stars Background should be fixed */}
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="absolute top-0 left-0 z-30 w-full">
          <FloatingDockDemo />
        </div>
      {/* Main Content Section */}
      <div className="relative z-10 h-full w-full flex flex-col">
        {/* Navbar Section */}
     

        {/* Scrollable BentoGrid Section */}
        <div
          className="flex-1 mt-[80px] overflow-auto"
          style={{
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          }}
        >
          <BentoGridDemo userItems={userItems} /> {/* Pass user items as props */}
        </div>
      </div>
    </div>
  );
}

// Prop validation for Explore component
Explore.propTypes = {
  userItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      header: PropTypes.node,
      icon: PropTypes.node,
    })
  ),
};

export default Explore;
