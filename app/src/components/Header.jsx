import { Link } from 'react-router-dom'

import './header.scss'
import logoIcon from '../assets/shared/logo.svg'

const Header = () => {
    return (
        <div id='header' className='fixed top-0 left-0 right-0 lg:top-8'>
            <div className='flex justify-between items-center h-24'>
                <div className='ml-6 sm:ml-10 lg:ml-12'>
                    <img src={logoIcon} alt="Logo Icon" />
                </div>

                {/* Mobile */}
                <div className='header-nav sm:hidden'>
                    <input type='checkbox' id='header-nav__input' />

                    <label for='header-nav__input' className='header-nav__menu-btn mr-7'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg></label>

                    <label for='header-nav__input' className='header-nav__overlay'></label>

                    <nav className='header-nav__mobile'>
                        <label for='header-nav__input' className='header-nav__close-btn'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg></label>
                        <ul className='header-nav__mobile-list'>
                            <li className="navtext p-4">
                                <Link to='/'><span className='font-bold pl-4 pr-2'>00</span> HOME</Link>
                            </li>
                            <li className="navtext p-4">
                                <Link to='/destination'><span className='font-bold pl-4 pr-2'>01</span> DESTINATION</Link>
                            </li>
                            <li className="navtext p-4">
                                <Link to='/crew'><span className='font-bold pl-4 pr-2'>02</span> CREW</Link>
                            </li>
                            <li className="navtext p-4">
                                <Link to='/technology'><span className='font-bold pl-4 pr-2'>03</span> TECHNOLOGY</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Tablet & Desktop */}
                <div className="hidden sm:block h-full backdrop-blur bg-[white]/10 relative">
                    <div className='header-divider hidden lg:block bg-secondary/40'></div>
                    <Link to='/' className='navtext h-full inline-flex items-center ml-12 mr-5 lg:ml-32 lg:mr-7
                                            hover:border-b-2'>
                        <span className='font-bold hidden lg:inline-block pr-3'>00</span> HOME
                    </Link>
                    <Link to='/destination' className='navtext h-full inline-flex items-center mx-5 lg:mx-7
                                            hover:border-b-2'>
                        <span className='font-bold hidden lg:inline-block pr-3'>01</span> DESTINATION
                    </Link>
                    <Link to='/crew' className='navtext h-full inline-flex items-center mx-5 lg:mx-7
                                            hover:border-b-2'>
                        <span className='font-bold hidden lg:inline-block pr-3'>02</span> CREW
                    </Link>
                    <Link to='/technology' className='navtext h-full inline-flex items-center ml-5 mr-12 lg:ml-7 lg:mr-28
                                            hover:border-b-2'>
                        <span className='font-bold hidden lg:inline-block pr-3'>03</span> TECHNOLOGY
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
