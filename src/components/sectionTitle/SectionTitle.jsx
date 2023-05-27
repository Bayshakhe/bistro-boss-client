import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center w-4/12 mx-auto my-10'>
            <h5 className='text-amber-600 italic mb-3'>---{subHeading}---</h5>
            <h3 className='text-4xl uppercase border-y-2 mb-4 py-3 '>{heading}</h3>
        </div>
    );
};

export default SectionTitle;