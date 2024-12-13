import { SearchBar } from '@atoms';
// import { IoSearch } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { VscAccount } from 'react-icons/vsc';
export const NavBar = () => {
  return (
    <>
      <div className="flex pt-6 pb-6 justify-center ">
        <div className="flex  gap-7 h-12 items-center pr-7 flex-shrink-0">
          <p className="font-integral-heavy tracking-tighter font-extrabold text-[32px] ">SHOP.CO</p>
          <div className="flex gap-3">
            <p>Shop</p>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
          </div>
        </div>
        <SearchBar className="flex-shrink-1 w-full sm:w-auto" />
        {/* barra search */}

        {/* <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="relative">
            <input
              type="text"
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              // onKeyPress={handleKeyPress}
              placeholder="Search..."
              aria-label="Search input field"
              className="w-full px-4 py-3 pl-12 pr-4 text-[#909090] bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out shadow-sm hover:shadow-md placeholder-[#909090]"
            />
            <button
              // onClick={handleSearch}
              aria-label="Search button"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-[#909090] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            >
              <IoSearch className="w-5 h-5" />
            </button>
          </div>
        </div> */}
        <div className="flex pl-10 gap-[14px] items-center">
          <button>
            <LuShoppingCart size={24} />
          </button>
          <button>
            <VscAccount size={24} />
          </button>
        </div>
      </div>
    </>
  );
};
