import React from 'react';
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title}) => {
  return (
    <div className='min-w-35 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title ? title : "Get Started"}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button