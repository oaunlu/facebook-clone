import './Layout.css';
import { Outlet, Link } from "react-router-dom";
import logo from '../nav-bar-icons/facebook-logo.svg';
import headerButtons from '../headerButtons.json';

const Layout = () => {
  const renderButtons = (divId) => {
    return headerButtons[divId].map(button => {
      return(
        <li>
          <Link 
            className={button.className} 
            to={button.route}
          >
            { button.className }
            <img 
              src={button.icon}
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
          <ul>
            { renderButtons('rightHeader') }
          </ul>
        </div>
      </header>
      <div className='body'>
          <Outlet />
      </div>
    </>
  )
};

export default Layout;