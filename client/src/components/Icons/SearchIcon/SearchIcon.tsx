import { useState } from "react";
import { Input } from "../../Input/Input";

export const SearchIcon = () => {
  const [showInput, setShowInput] = useState(false);

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  return (
    <>
        {showInput ? (
          <div>
            <Input
              type="text"
              id="search"
              className={
                "w-full md:w-[300px] mt-1 p-1 border border-slate-500 rounded outline-0 text-zinc-950 bg-white focus:ring-2 focus:ring-zinc-800 "
              }
              name="search"
            />
            <button onClick={handleShowInput} className="ml-2 mt-1 p-2 text-gray-500 hover:text-gray-700 cursor-pointer">
              X
            </button>
          </div>
        ) : (
          <button onClick={handleShowInput} className="p-1 text-zinc-50 hover:text-gray-700 cursor-pointer">
            <svg
              className="w-8 h-8 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        )}
    
    </>
  );
};
