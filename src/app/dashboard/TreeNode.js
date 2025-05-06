"use client";
import { ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const TreeWithFocus = ({ initialNode }) => {
  const [focusedNode, setFocusedNode] = useState(initialNode);
  const [nodeHistory, setNodeHistory] = useState([]);

  const focusOnNode = (node) => {
    setNodeHistory(prev => [...prev, focusedNode]);
    setFocusedNode(node);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (nodeHistory.length > 0) {
      const previousNode = nodeHistory[nodeHistory.length - 1];
      setFocusedNode(previousNode);
      setNodeHistory(prev => prev.slice(0, -1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {nodeHistory.length > 0 && (
        <button
          onClick={goBack}
          className="mb-4 flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} className="mr-1" /> Back to previous
        </button>
      )}

      <TreeNode
        node={focusedNode}
        onFocus={focusOnNode}
        rootLevel={true}
      />
    </div>
  );
};

const TreeNode = ({ node, onFocus, rootLevel = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (rootLevel) {
      setIsExpanded(true);
    }
  }, [rootLevel]);

  if (!node) {
    console.warn("Node is undefined");
    return null;
  }

  const { name = "Unnamed User", email = "No Email", children = [] } = node;
  const leftChild = children.find(child => child.side === "left") || null;
  const rightChild = children.find(child => child.side === "right") || null;

  const toggleChildren = () => {
    if (children.length > 0) {
      setIsExpanded((prev) => !prev);
    }
  };

  const handleFocus = (e) => {
    e.stopPropagation();
    if (onFocus && !rootLevel) {
      onFocus(node);
    }
  };

  return (
    <div className="flex flex-col items-center relative w-full">
      <div
        className={`cursor-pointer bg-white dark:bg-gray-800 rounded-lg text-xs text-gray-900 dark:text-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs flex items-center gap-3 justify-center ${rootLevel ? "border-2 border-green-500" : ""}`}
        onClick={toggleChildren}
      >
        {children.length > 0 ? (
          isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
        ) : (
          <div className="w-4" />
        )}

        <div className="flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dmj6ur8sm/image/upload/v1745654576/fanfbremylhqvxrbqnye.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full mb-2"
          />
          <span className="text-xs font-medium">{name || "Unnamed"}</span>
          <span className="text-[10px] w-20 text-gray-600 dark:text-gray-400">
            {email || "No Email"}
          </span>
        </div>


        {!rootLevel && (
          <button
            className="ml-2 text-[10px] bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            onClick={handleFocus}
          >
            Focus
          </button>
        )}
      </div>

      <div
        className={`transition-all duration-100 ease-in-out overflow-hidden w-full ${isExpanded ? "max-h-[1000px] mt-4" : "max-h-0"
          }`}
      >
        {isExpanded && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-red-500"></div>
        )}

        {isExpanded && (
          <div className="flex justify-between relative w-full mt-8">

            <div className="absolute top-[-10px] left-1/4 right-1/4 h-0.5 bg-red-500"></div>


            <div className="flex flex-col items-center w-1/2 relative">

              <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-red-500"></div>
              <div className="mt-8 w-full flex justify-center">
                {leftChild ? (
                  <TreeNode node={leftChild} onFocus={onFocus} />
                ) : (
                  <div className="text-gray-400 text-[10px] bg-white dark:bg-gray-800 border border-gray-300 rounded-lg px-3 py-2">Left OPEN</div>
                )}
              </div>
            </div>


            <div className="flex flex-col items-center w-1/2 relative">

              <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-red-500"></div>
              <div className="mt-8 w-full flex justify-center">
                {rightChild ? (
                  <TreeNode node={rightChild} onFocus={onFocus} />
                ) : (
                  <div className="text-gray-400 text-[10px] bg-white dark:bg-gray-800 border border-gray-300 rounded-lg px-3 py-2">Right OPEN</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { TreeNode, TreeWithFocus };
export default TreeNode;