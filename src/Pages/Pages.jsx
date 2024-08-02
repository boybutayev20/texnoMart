import React from 'react'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'

const Pages = () => {
    return (
        <div>
            <div>
                <h2 className='mb-10'>Способы оплаты</h2>
                <Sidebar />
                <Routes>
                    
                </Routes>
            </div>
        </div>
    )
}

export default Pages