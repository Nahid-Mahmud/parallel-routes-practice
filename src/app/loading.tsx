const Loading = () => {
  return (
    <div>
      <div className="h-screen text-white bg-black w-full flex items-center justify-center text-3xl font-bold border-2 border-gray-300 rounded-lg ">
        Loading Main Page{" "}
        {[".", "..", "..."].map((dot, index) => (
          <span
            key={index}
            className={`animate-pulse ${
              index === 0 ? "text-red-500" : index === 1 ? "text-green-500" : "text-blue-500"
            }`}
          >
            {dot}
          </span>
        ))}{" "}
      </div>
    </div>
  );
};

export default Loading;
