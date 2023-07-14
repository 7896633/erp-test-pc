import React, {useState} from 'react';
import {IoCalendarOutline} from "react-icons/io5";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import * as locales from 'react-date-range/dist/locale';
import {format} from 'date-fns'
import {CiSearch} from "react-icons/ci";
import {AiFillCaretDown} from "react-icons/ai";

const anomalous=[
    {
        id:'1',
        number:'SLTZ2021100001',
        supplier:'演示供应',
        material:'A等级电池',
        quantity:'20.00000000',
        date:'20.00000000',
        warehouse:''
    },
    {
        id:'2',
        number:'SLTZ2021100002',
        supplier:'演示供应',
        material:'A等级电池',
        quantity:'20.00000000',
        date:'20.00000000',
        warehouse:''
    },
    {
        id:'3',
        number:'SLTZ2021100003',
        supplier:'演示供应',
        material:'A等级电池',
        quantity:'20.00000000',
        date:'20.00000000',
        warehouse:''
    }
]

const nav=[
    {name:"逾期采购订单"},
    {name:"来料不良供应商"},
    {name:"待处理收料预警"}
]

const Anomalous = () => {
    const [active,setActive]=useState(0)
    const [item,setItem]=useState({name:'逾期采购订单'})
    const handleClick=(e,index)=>{
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index)
    }

    const [date,setDate]=useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])
    const [openDate,setOpenDate]=useState(false)
    return (
        <div className='bg-white w-full px-4 h-[30rem] '>
            <div className='p-3 text-md'>异常播报</div>
            <div className='flex flex-col px-4'>
                <div className='flex gap-2'>
                    {
                        nav.map((item,index)=>(
                            <div
                                key={item.name}
                                onClick={(e)=>(handleClick(e,index))}
                                className={`${active === index ? 'bg-[#2555ff]':'bg-[#eff2f7]'} cursor-pointer text-white rounded-t-md p-1 text-sm`}>
                                <div>待处理收料预警</div>
                            </div>
                        ))
                    }

                </div>
                <div className='border-t flex justify-end '>
                    <div className='flex items-center gap-[10px] relative py-4'>
                        <div onClick={()=>setOpenDate(!openDate)} className='cursor-pointer text-sm flex items-center gap-2'>
                            <div>开始时间</div>
                            <span className='border border-black rounded-md p-0.5 flex items-center gap-2'>
                                {format(date[0].startDate,"yyyy/MM/dd")}
                                <IoCalendarOutline className='w-4 text-gray-500'/>
                            </span>
                        </div>
                        <div onClick={()=>setOpenDate(!openDate)} className='cursor-pointer text-sm flex items-center gap-2'>
                           <div>结束时间</div>
                            <span className='border border-black rounded-md p-0.5 flex items-center gap-2'>
                                {format(date[0].endDate,"yyyy/MM/dd")}
                                <IoCalendarOutline className='w-4 text-gray-500'/>
                            </span>
                        </div>
                        {openDate
                            &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                locale={locales['zhCN']}
                                className='absolute -bottom-96 z-10'
                            />
                        }
                        <div className='cursor-pointer text-sm flex items-center gap-2'>
                            <div>供应商</div>
                            <div className='flex items-center py-0.5 pr-3 flex-grow  rounded-md border border-black w-24'>
                                <input type='text' className=' text-sm focus:outline-none w-full ml-1.5'/>
                                <CiSearch className='cursor-pointer ' size={20}/>
                            </div>
                        </div>
                        <div className='w-24 border border-black text-center rounded-sm ml-10'>
                            查询
                        </div>
                    </div>
                </div>
                <table className='w-full bg-[#eff2f7]'>
                    <thead className=''>
                    <tr className='h-[40px] divide-x divide-gray-300'>
                        <th className='text-center text-sm relative '>
                            序号
                            <AiFillCaretDown size={12} className='rotate-180 absolute right-0 bottom-5'/>
                        </th>
                        <th className='text-center text-sm'>供应商</th>
                        <th className='text-center text-sm'>收料编号</th>
                        <th className='text-center text-sm'>物料</th>
                        <th className='text-center text-sm'>交货数量</th>
                        <th className='text-center text-sm'>交收料日期</th>
                        <th className='text-center text-sm'>仓库</th>
                    </tr>
                    </thead>
                    <tbody className=''>
                    {
                        anomalous.map((item,index)=>(
                            <tr key={index} className='h-[40px]  odd:bg-[#d4dfff] odd:divide-none divide-x divide-gray-300 text-sm'>
                                <td>{item.id}</td>
                                <td>{item.number}</td>
                                <td>{item.supplier}</td>
                                <td>{item.material}</td>
                                <td>{item.quantity}</td>
                                <td>{item.date}</td>
                                <td>{item.warehouse}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Anomalous;