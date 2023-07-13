import React from 'react';
import {CiSearch} from "react-icons/ci";
import Image from "next/image";
import avatar from '/public/placeholder.jpg'
import {AiOutlineDown} from "react-icons/ai";

const Header = () => {
    return (
        <div className=' bg-[#2555ff] flex items-center py-2 justify-between px-8'>
            {/*logo*/}
            <div className='flex gap-1.5 items-center'>
                <div className='font-[600] text-sm text-white'>金蝶云</div>
                <div className='font-[100] text-sm text-[#c0cdf9]'>星空</div>
                <div className='text-xs bg-white text-[#2555ff] p-0.5 rounded-md scale-75 -skew-x-6'>企业版</div>
                <div className='text-xs bg-[#f6994c] text-white p-1 rounded-md'>演示版</div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-2 py-1 pl-3 flex-grow  rounded-full border w-32'>
                    <CiSearch className='cursor-pointer text-white' size={22}/>
                    <input type='text' className='bg-transparent text-sm focus:outline-none text-white w-full' placeholder='全局搜索'/>
                </div>
                <div className='text-[#c0cdf9] text-sm '>
                    蓝海实业集团V7.7
                </div>
                <p className='border-r h-4'/>
                <div className='text-[#c0cdf9] text-sm flex items-center gap-0.5'>
                    <p>101.3 平板实业部</p>
                    <AiOutlineDown/>

                </div>
                <p className='border-r h-4'/>
                <Image src={avatar} alt='' className='w-7 rounded-full'/>
                <p className='border-r h-4'/>
                <div className='text-[#c0cdf9] text-sm'>
                    注销
                </div>
            </div>
        </div>
    );
};

export default Header;