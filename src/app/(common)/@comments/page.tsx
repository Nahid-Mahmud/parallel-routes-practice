import { delay } from "@/utils/delay";
import React from "react";

async function Comments() {
  await delay(5000);

  return (
    <div className="h-full w-full flex items-center justify-center text-3xl font-bold border-2 border-gray-300 rounded-lg ">
      Comments
    </div>
  );
}

export default Comments;
