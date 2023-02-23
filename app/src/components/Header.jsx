import { Link } from 'react-router-dom'

import './header.scss'
// Mobile -> sm -> lg
import logoIcon from '../assets/shared/logo.svg'

const Header = () => {
    return (
        <div id='header' className='bg-slate-600'>
            <div className='flex justify-between items-center p-6'>
                <div className=''>
                    <img src={logoIcon} alt="Logo Icon" />
                </div>

                {/* Mobile */}
                <div className='header-nav sm:hidden'>
                    <input type='checkbox' id='header-nav__input' />

                    <label for='header-nav__input' className='header-nav__menu-btn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg></label>

                    <label for='header-nav__input' className='header-nav__overlay'></label>

                    <nav className='header-nav__mobile'>
                        <label for='header-nav__input' className='header-nav__close-btn'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg></label>
                        <ul className='header-nav__mobile-list'>
                            <li className="header-nav__mobile-item"><Link to='/'>Home</Link></li>
                            <li className="header-nav__mobile-item"><Link to='/destination'>Destination</Link></li>
                            <li className="header-nav__mobile-item"><Link to='/crew'>Crew</Link></li>
                            <li className="header-nav__mobile-item"><Link to='/technology'>Technology</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden sm:block">
                    <Link to='/'>Home</Link>
                    <Link to='/destination'>Destination</Link>
                    <Link to='/crew'>Crew</Link>
                    <Link to='/technology'>Technology</Link>
                </div>
            </div>



        </div>
    );
};

export default Header;
