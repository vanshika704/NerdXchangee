// import PropTypes from "prop-types"; // Import PropTypes
// import { cn } from "../../lib/utils";

// export const BentoGrid = ({
//   className,
//   children,
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// // Prop validation for BentoGrid
// BentoGrid.propTypes = {
//   className: PropTypes.string, // className should be a string (optional)
//   children: PropTypes.node.isRequired, // children must be a React node (required)
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   icon,
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
//         className
//       )}
//     >
//       {header}
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
//         {icon}
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//           {title}
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Prop validation for BentoGridItem
// BentoGridItem.propTypes = {
//   className: PropTypes.string, // className should be a string (optional)
//   title: PropTypes.string.isRequired, // title must be a string (required)
//   description: PropTypes.string.isRequired, // description must be a string (required)
//   header: PropTypes.node, // header can be any React node (optional)
//   icon: PropTypes.node.isRequired, // icon must be a React node (required)
// };
import PropTypes from "prop-types"; // Import PropTypes
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-full w-full h-screen", // Full width and height
        className
      )}
    >
      {children}
    </div>
  );
};

// Prop validation for BentoGrid
BentoGrid.propTypes = {
  className: PropTypes.string, // className should be a string (optional)
  children: PropTypes.node.isRequired, // children must be a React node (required)
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// Prop validation for BentoGridItem
BentoGridItem.propTypes = {
  className: PropTypes.string, // className should be a string (optional)
  title: PropTypes.string.isRequired, // title must be a string (required)
  description: PropTypes.string.isRequired, // description must be a string (required)
  header: PropTypes.node, // header can be any React node (optional)
  icon: PropTypes.node.isRequired, // icon must be a React node (required)
};
