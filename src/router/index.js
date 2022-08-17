import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../componentes/Navbar';

import { Home } from "../pages/home";
function Router() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Navbar  />
               {/*  <Routes>
                    <Route path='/' element={<Home />} />
                </Routes> */}
            </BrowserRouter>
        </div>
    )
}
export default memo(Router);