import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
export const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleSignUp = () => {
    console.log('Redirecting to signup page');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="relative bg-black text-white ">
      <div className="flex items-center justify-center gap-1 h-[38px] max-sm-390:h-[34px]">
        <p className="text-sm font-normal max-sm-390:text-xs">Sign-up and get 20% off to your first order.</p>
        <button
          onClick={handleSignUp}
          className="text-sm max-sm-390:text-xs font-medium underline decoration underline-offset-4 hover:text-gray-300 transition-colors"
          aria-label="Sign up for 20% discount"
        >
          Sign Up Now
        </button>
        <button
          onClick={handleClose}
          className="absolute right-4 top-1/2 -translate-y-1/2 max-sm-480:right-1 hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Close notification banner"
        >
          <IoMdClose className=" max-sm-390:hidden max-sm-480:w-4 max-sm-480:h-4 w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};
