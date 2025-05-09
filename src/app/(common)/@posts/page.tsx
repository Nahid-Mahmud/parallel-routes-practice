import { delay } from "@/utils/delay";
import React from "react";

async function Posts() {
  await delay(2000);
  return (
    <div className="h-full w-full flex items-center justify-center text-3xl  font-bold border-2 border-gray-300 rounded-lg ">
      Posts
    </div>
  );
}

export default Posts;
