import React, { Component } from 'react';
import CustomLink from '../CustomLink/CustomLink';

class Header extends Component {
    render() {
        return (
            <header className='h-[80px]  bg-[#f5eec2]'>
                <nav className='h-[100%] flex justify-between items-center max-w-[1200px] mx-auto'>
                <div className="brand-logo">
                    <h3 className='text-4xl font-semibold font-akshar text-primary'>Royal Hotel</h3>
                </div>
                
                    <ul className='flex gap-5'>
                        <CustomLink className="text-primary text-[20px] font-bold hover:text-[#39395f] pb-2 px-2 font-roboto" to={'/'}>Home</CustomLink>
                        <CustomLink className="text-primary text-[20px] font-bold hover:text-[#39395f] pb-2 px-2" to={'/about'}>About</CustomLink>
                        <CustomLink className="text-primary text-[20px] font-bold hover:text-[#39395f] pb-2 px-2" to={'/packages'}>Packages</CustomLink>
                        <CustomLink className="text-primary text-[20px] font-bold hover:text-[#39395f] pb-2 px-2" to={'/login'}>Login</CustomLink>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;