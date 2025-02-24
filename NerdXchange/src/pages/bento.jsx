

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IconClipboardCopy } from "@tabler/icons-react";

// Skeleton placeholder component for loading state (to be replaced with loader)
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export function BentoGridDemo({ userItems = [] }) {
  const [items, setItems] = useState([]); // Initially set as empty
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data from the user (or an API)
  useEffect(() => {
    // Simulate network delay or API fetching
    setTimeout(() => {
      // If userItems exist, use them; otherwise, use empty array
      setItems(userItems.length > 0 ? userItems : []);
      setIsLoading(false); // Stop loading once the data is set
    }, 2000); // Simulate 2 seconds delay
  }, [userItems]);

  // Default placeholders when there are no items
  const defaultPlaceholders = [
    { title: "Placeholder 1", description: "This is a placeholder.", header: <Skeleton /> },
    { title: "Placeholder 2", description: "This is a placeholder.", header: <Skeleton /> },
    { title: "Placeholder 3", description: "This is a placeholder.", header: <Skeleton /> },
    { title: "Placeholder 4", description: "This is a placeholder.", header: <Skeleton /> },
    { title: "Placeholder 5", description: "This is a placeholder.", header: <Skeleton /> },
    { title: "Placeholder 6", description: "This is a placeholder.", header: <Skeleton /> },
  ];

  return (
    <>
      {/* Inject loader animations */}
      <style>
        {`
          .loader {
            --c: no-repeat linear-gradient(orange 0 0);
            background: 
              var(--c), var(--c), var(--c),
              var(--c), var(--c), var(--c),
              var(--c), var(--c), var(--c);
            background-size: 16px 16px;
            animation: l32-1 1s infinite, l32-2 1s infinite;
          }
          @keyframes l32-1 {
            0%, 100% {width: 45px; height: 45px;}
            35%, 65% {width: 65px; height: 65px;}
          }
          @keyframes l32-2 {
            0%, 40%  {background-position: 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50%;}
            60%, 100% {background-position: 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50%;}
          }
        `}
      </style>

      <BentoGrid className="max-w-4xl max-h-3.5 mx-auto">
        {isLoading ? (
          // Custom loader when loading
          <div className="flex justify-center items-center h-full w-full">
            <div className="loader"></div>
          </div>
        ) : (
          // When no user items are available, show default placeholders
          (items.length === 0 ? defaultPlaceholders : items).map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title || "No Title Provided"}
              description={item.description || "No description available."}
              header={item.header || <Skeleton />}
              icon={item.icon || <IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))
        )}
      </BentoGrid>
    </>
  );
}

// Prop validation for BentoGridDemo
BentoGridDemo.propTypes = {
  userItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      header: PropTypes.node,
      icon: PropTypes.node,
    })
  ),
};

