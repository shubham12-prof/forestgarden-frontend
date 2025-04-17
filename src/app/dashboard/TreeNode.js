import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleChildren = () => {
    if (node.children?.length > 0) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col items-center relative w-full">
      <div
        className="cursor-pointer bg-white dark:bg-gray-800 border border-green-400 dark:border-green-500 rounded-lg px-4 py-2 text-sm text-gray-900 dark:text-gray-100 font-semibold shadow-md text-center max-w-xs transition-all duration-200 hover:shadow-lg flex items-center gap-2"
        onClick={toggleChildren}
      >
        {node.children?.length > 0 ? (
          isExpanded ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )
        ) : (
          <div className="w-4" />
        )}
        <div className="flex flex-col text-lg">
          <span>{node.name || "Unnamed User"}</span>
          <span className="text-lg text-gray-600 dark:text-gray-400">
            {node.email}
          </span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[1000px] mt-4" : "max-h-0"
        } w-full`}
      >
        {node.children?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 relative">
            <div className="absolute top-[-20px] left-1/2 w-0.5 h-5 bg-gray-400 dark:bg-gray-600 transform -translate-x-1/2"></div>

            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-gray-400 dark:bg-gray-600"></div>
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNode;
