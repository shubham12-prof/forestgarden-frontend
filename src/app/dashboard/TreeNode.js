import React from "react";

const TreeNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="bg-white border border-blue-300 rounded-lg px-4 py-2 text-sm text-blue-900 font-semibold shadow-md">
        {node.name || "Unnamed User"}
      </div>
      {node.children?.length > 0 && (
        <div className="flex justify-center mt-4 gap-10 relative">
          <div className="absolute top-[-20px] left-1/2 w-px h-5 bg-gray-400"></div>

          {node.children.map((child, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-px h-4 bg-gray-400"></div>
              <TreeNode node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
