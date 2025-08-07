import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DatePicker from '../../componnets/datePikers';
import SelectLabels from '../../componnets/selectBox';
import AccordionUsage from '../../componnets/accordion';
import { useNavigate } from 'react-router-dom';

const Header = ({path}) => {
  const navigate = useNavigate()
  return (
    // <section className="flex border-2 p-3" >
    //   <div className="flex flex-row items-center justify-center">
    //     <h1 class="ColorOrange weight900">NESTO</h1>
    //   </div>

    //   <div className="flex">
    //     <div> <SelectLabels /></div>
    //     <div style={{width: "20rem"}}> <DatePicker /></div>
    //     <div className='p-2'><AccordionUsage /></div>
    //   </div>

    //   <div className="p-2">
    //      <button onClick= {()=>navigate(path.path)} type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Search</button>
    //   </div>
    // </section>
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 border-2 p-4">
  {/* Left: Logo */}
  <div className="md:col-span-1 flex items-center justify-center md:justify-start">
    <h1 className="text-orange-500 font-extrabold text-xl">NESTO</h1>
  </div>

  {/* Middle: Controls */}
  <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div>
      <SelectLabels />
    </div>
    <div className="w-full sm:w-[20rem]">
      <DatePicker />
    </div>
    <div className="p-2">
      <AccordionUsage />
    </div>
  </div>

  {/* Right: Search Button */}
  <div className="md:col-span-1 flex items-center justify-center md:justify-end">
    <button
      onClick={() => navigate(path.path)}
      type="button"
      className="h-[3rem] borderOrange py-2.5 px-5 text-sm font-medium text-gray-900   rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      Search
    </button>
  </div>
</section>
  );
};

export default Header;


