import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const Card = ({subscription}) => {
    const {price, gymFeatures}=subscription;
    return (
        <div className=' bg-slate-200 px-4 py-5 rounded-md flex flex-col'>
                <h1 className=' text-4xl mb-3'>${price}<span className=' text-2xl'>/month</span></h1>
                <h1 className=' text-3xl mb-1'>Features</h1>
                <div className=' mb-8'>
                    {
                        gymFeatures.map(feature=> <p className='flex items-center'><CheckBadgeIcon className='h-4 w-4 pr-1' />{feature}</p>)
                    }
                </div>
            <div className='mt-auto'>
            <button className='bg-slate-600 px-4 py-1 hover:bg-green-600 rounded-lg'>Subscribe</button>
            </div>
        </div>
    );
};

export default Card;