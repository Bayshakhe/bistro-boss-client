import React from 'react';
import image from '../../../assets/home/chef-service.jpg'

const Poster = () => {
    return (
        <div className='hero mt-8'>
            <img src={image} alt="" />
            <div className='bg-white text-center py-20 hero-content flex-col m-5 '>
                <h3 className='text-4xl uppercase'>Bistro Boss</h3>
                <p className='w-3/4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo. 
                </p>
            </div>
        </div>
    );
};

export default Poster;