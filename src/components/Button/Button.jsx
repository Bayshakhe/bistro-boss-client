import React from 'react';

const Button = ({children}) => {
    return (
        <div className=' my-5'>
            <button className='btn bg-transparent text-black border-0 border-b-4 hover:text-white hover:bg-black'>{children}</button>
        </div>
    );
};

export default Button;