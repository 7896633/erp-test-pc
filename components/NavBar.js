import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {HiMiniSquares2X2} from "react-icons/hi2";
import {BsChevronDoubleDown, BsQuestionCircle} from "react-icons/bs";
import {HiOutlineMenuAlt4} from "react-icons/hi";

const NavBar = () => {
    return (
        <div className='flex items-center justify-between bg-white gap-4 px-4'>
            <div className='flex items-center gap-2'>
                <div className='flex gap-1'>
                    <div className='border-b-2 py-2 border-[#2555ff] p-1'>
                        <AiFillHome color='#2555ff'/>
                    </div>
                    <div className='py-2 p-1'>
                        <HiMiniSquares2X2 color='#c0cdf9'/>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <div className='text-black text-[0.75rem] font-[600]'>
                        采购快速下单
                    </div>
                    <div className='text-black text-[0.75rem] font-[600]'>
                        采购合同
                    </div>
                    <div className='text-black text-[0.75rem] font-[600]'>
                        期初采购退料单-新增
                    </div>
                    <div className='text-black text-[0.75rem] font-[600]'>
                        我的组织及角色
                    </div>
                    <div className='text-black text-[0.75rem] font-[600]'>
                        销售出库单列表
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-3 text-[#9a9fa5]'>
                <BsChevronDoubleDown/>
                <BsQuestionCircle/>
                <HiOutlineMenuAlt4/>
            </div>
        </div>
    );
};

export default NavBar;