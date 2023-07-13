import React from 'react';
import {AiFillCaretDown} from "react-icons/ai";
import img1 from '/public/未标题-1.png'
import img2 from '/public/未标题-2.png'
import img3 from '/public/未标题-3.png'
import img4 from '/public/未标题-4.png'
import Image from "next/image";

const common=[
    {
        img:img4,
        title:'采购申请列表'
    },
    {
        img:img2,
        title:'凭证录入'
    },
    {
        img:img4,
        title:'凭证查询'
    },{
        img:img4,
        title:'凭证审核'
    },
    {
        img:img3,
        title:'科目余额表'
    },
    {
        img:img3,
        title:'明细分类账'
    },
    {
        img:img1,
        title:'点击添加'
    },

]

const Common = () => {
    return (
        <div className='bg-white w-full flex flex-col py-3'>
            <div className='flex items-center gap-2 pl-6'>
                <AiFillCaretDown size={10}/>
                <p>常用功能</p>
            </div>
            <div className='flex items-center'>
                {
                    common.map((item,index)=>(
                        <div key={index} className='flex space-x-14 pl-10 '>
                            <div className='flex items-center flex-col gap-1.5'>
                                <Image src={item.img} alt='' className='w-12'/>
                                <p className='text-xs'>{item.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Common;