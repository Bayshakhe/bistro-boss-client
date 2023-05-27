import React from 'react';

const MenuItem = ({menu}) => {
    const {image, name, price, recipe,} = menu
    return (
        <div className='flex gap-5'>
            <img style={{borderRadius: '0px 200px 200px 200px'}} className='w-[118px] h-[104px]' src={image} alt="" />
            <div className=''>
                <h5 className='uppercase text-lg'>{name}</h5>
            <p>{recipe}</p>
            </div>
                <p className='text-amber-600'>${price}</p>
        </div>
    );
};

export default MenuItem;