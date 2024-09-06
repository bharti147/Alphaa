import React from 'react';
import { Link } from 'react-router-dom';

function ServicesDropDown({ isExpanded }) {
  return (
    <div className={`${isExpanded ? 'block' : 'hidden'} absolute bg-white lg:top-40 lg:right-[5rem]
     w-full  lg:w-auto
    `}>
    <ul className='w-full flex flex-col flex-wrap py-4 border '>
      <li className='px-8 lg:px-4 py-5 border-b-2 font-bold tracking-tight  hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>FIRST HOME BUYER</Link></li>
      <li className='px-8 lg:px-4 py-5 border-b-2 font-bold tracking-tight  hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>BUYING NEXT HOME</Link></li>
      <li className='px-8 lg:px-4 py-5 border-b-2 font-bold tracking-tight  hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>REVIEW CURRENT LOANS</Link></li>
      <li className='px-8 lg:px-4 py-5 border-b-2 font-bold tracking-tight  hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>COMMERCIAL LOAN</Link></li>
      <li className='px-8 lg:px-4 py-5 border-b-2 font-bold tracking-tight  hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>ASSET FINANCE</Link></li>
      <li className='px-8 lg:px-4 py-5 border-b-2 font-bold tracking-tight  hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>PERSONAL LOAN</Link></li>
      <li className='px-8 lg:px-4 py-5  font-bold tracking-tightest         hover:bg-custom-dark hover:text-white text-[0.90rem]'><Link to='#'>SELF-MANAGED SUPER FUND (SMSF) LENDING</Link></li>
      </ul>
    </div>
  );
}

export default ServicesDropDown;
