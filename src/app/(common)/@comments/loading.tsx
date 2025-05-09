import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="h-full w-full flex items-center justify-center text-3xl font-bold border-2 border-gray-300 rounded-lg animate-pulse">
        Loading comments...
      </div>
    </div>
  );
};

export default Loading;
