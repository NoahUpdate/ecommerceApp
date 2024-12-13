import { IoSearch } from 'react-icons/io5';
import React from 'react';

interface Props {
  className?: string;
}
export const SearchBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={`max-w-[577px]  h-12 flex gap-3 bg-[#f0f0f0] rounded-3xl px-4 py-3 hover:cursor ${className || ''}`}>
      <button aria-label="Search button" className="focus:outline-none">
        <IoSearch size={20} color="#909090" />
      </button>
      <input
        type="text"
        placeholder="Search for products..."
        aria-label="Search input field"
        className="bg-transparent text-[#909090] focus:outline-none "
      ></input>
    </div>
  );
};
