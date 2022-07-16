import './Layout.sass';
import { Outlet, Link } from "react-router-dom";
import logo from '../nav-bar-icons/facebook-logo.svg';
import homeIcon from '../nav-bar-icons/home-icon.svg';
import pagesIcon from '../nav-bar-icons/pages-icon.svg';
import watchIcon from '../nav-bar-icons/watch-icon.svg';
import marketplaceIcon from '../nav-bar-icons/marketplace-icon.svg';
import groupsIcon from '../nav-bar-icons/groups-icon.svg';
import menuIcon from '../nav-bar-icons/menu-icon.svg';
import messengerIcon from '../nav-bar-icons/messenger-icon.svg';
import notificationsIcon from '../nav-bar-icons/notifications-icon.svg';
import headerButtons from '../headerButtons.json';

const Layout = () => {
  const renderButtons = (divId) => {
    let midIcons = [homeIcon, pagesIcon, watchIcon, marketplaceIcon, groupsIcon];
    let rightIcons = [menuIcon, messengerIcon, notificationsIcon, null];
    return headerButtons[divId].map((button, index) => {
      return(
        <li>
          <Link 
            className={button.className} 
            to={button.route}
          >
            <img 
              src={divId === 'middleHeader' ? midIcons[index] : rightIcons[index]}
              alt={button.alt}
            ></img>
          </Link>
        </li>
      )
    });
  }

  return (
    <>
      <header className='header'>
        <div className='leftHeader'>
          <Link to="/">
            <img 
              className='App-logo' 
              src={ logo } 
              alt="logo"
            ></img>
          </Link>
          <input 
            className='searchBox' 
            type="search" 
            placeholder='Search Facebook'
          ></input>
        </div>
        <div className='middleHeader'>
          <nav>
            <ul>
              { renderButtons('middleHeader') }
            </ul>
          </nav>
        </div>
        <div className='rightHeader'>
          <nav>
            <ul>
              { renderButtons('rightHeader') }
            </ul>
          </nav>
        </div>
      </header>
      <div className='body'>
          <Outlet />
      </div>
    </>
  )
};

export default Layout;