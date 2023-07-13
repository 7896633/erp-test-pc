import React from 'react';
import {AiFillCaretDown} from "react-icons/ai";
const backlog=[
    {
        price:'0',
        title:'带审核的订单（90天）',
    },
    {
        price:'0',
        title:'带审核的订单（90天）',
    },
    {
        price:'0',
        title:'本月出库通知单',
    },
    {
        price:'0',
        title:'带审核的订单（90天）',
    },
    {
        price:'0',
        title:'带审核的订单（90天）',
    }
]

const Backlog = () => {
    return (
        <div className='bg-white w-full flex flex-col py-2'>
            <div className=''>

            </div>
            <div className='flex items-center gap-2 pl-6'>
                <AiFillCaretDown size={10}/>
                <p>待办事项</p>
            </div>
            <div className='flex py-3'>
                {
                    backlog.map((item,index)=>(
                        <div key={index} className='flex space-x-9 pl-10 items-end'>
                            <div className='flex flex-col gap-1.5'>
                                <div className='text-xs'>销售订单</div>
                                <div className='text-4xl text-center text-[#8192b7]'>{item.price}</div>
                                <div className='text-xs pl-1'>{item.title}</div>
                            </div>
                            <p className='border border-r border-r h-16'></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Backlog;