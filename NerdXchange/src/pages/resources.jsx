import { FloatingDockDemo } from "../components/navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
function Resources(){
    return <><div
    //   className="rounded-md h-screen flex flex-col items-center justify-center relative w-full"
    className="rounded-md bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1A072DFF,_#220A3BFF)] h-screen flex flex-col items-center justify-center relative w-full"

      >
           <div className="absolute top-4 left-10 z-30">
                  <FloatingDockDemo/>
                </div>
      <ShootingStars />
      <StarsBackground />
        </div></>
}
export default Resources;