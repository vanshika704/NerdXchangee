// import { FloatingDockDemo } from "../components/navbar";
// import ProfileDashboard from "../components/ui/profile";
// import { ShootingStars } from "../components/ui/shooting-stars";
// import { StarsBackground } from "../components/ui/stars-background";

// function Profile() {
//   return (
//     <>
//       <div className="relative h-screen w-full bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1A072DFF,_#220A3BFF)]">
//         {/* Profile Dashboard takes full screen */}
//         <ProfileDashboard className="absolute inset-0 w-full h-full z-10" />

//         {/* Floating Dock on top left */}
//         <div className="absolute top-2 left-72 z-30">
//           <FloatingDockDemo />
//         </div>

//         {/* Shooting Stars and Stars Background */}
//         <ShootingStars />
//         <StarsBackground />
//       </div>
//     </>
//   );
// }

// export default Profile;
import { FloatingDockDemo } from "../components/navbar";
import ProfileDashboard from "../components/ui/profile";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

function Profile() {
  return (
    <>
      <div
        className="relative w-full"
        style={{
          background: 'linear-gradient(to bottom right, #000000, #06061A, #1A072D, #220A3B)',
          height: '100vh',
          overflow: 'hidden',
          margin: 0,
        }}
      >
        {/* Profile Dashboard takes full screen */}
        <ProfileDashboard className="absolute inset-0 w-4/5 h-full z-10" />

        {/* Floating Dock on top left */}
        <div className="absolute top-2 left-72 z-30">
          <FloatingDockDemo />
        </div>

        {/* Shooting Stars and Stars Background */}
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
}

export default Profile;
