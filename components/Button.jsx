import React from "react";

const Button = (props) => {
  if (props.btnType === "primary") {
    return (
      <button class="w-full px-4 py-2 bg-[#109CF1] outline-none rounded text-white shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-[#0881cc] focus:bg-[#109CF1] focus:ring-2 focus:ring-[#109CF1] focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">
        {props.children}
      </button>
    );
  } else if (props.btnType === "secondary") {
    return (
      <button class="w-full px-4 py-2 bg-transparent outline-none border-2 border-[#109CF1] rounded text-[#109CF1] font-medium active:scale-95 hover:bg-[#109CF1] hover:text-white hover:border-transparent focus:bg-[#109CF1] focus:text-white focus:border-transparent focus:ring-2 focus:ring-[#109CF1] focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">
        {props.children}
      </button>
    );
  } else {
    return (
      <button class="w-full px-4 py-2 bg-slate-500 outline-none rounded text-white shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-slate-600 focus:bg-slate-600 focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">
        {props.children}
      </button>
    );
  }
};

export default Button;
