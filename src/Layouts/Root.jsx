import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' bg-yellow-300 w-full'>
            this root
            <div className=' bg-red-300 w-full'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Root;