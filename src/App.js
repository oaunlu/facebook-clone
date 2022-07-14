import logo from './nav-bar-icons/facebook-logo.svg'
import headerButtons from './headerButtons.json'
import './App.css';
import Home from './Home';

function App() {
  const renderButtons = (divId) => {
    return headerButtons[divId].map(button => {
      return(
        <a 
          className={button.className}
          href={button.href}
        >
          { button.className }
          <img 
            src={button.icon}
            alt={button.alt}
          ></img>
        </a>
      )
    });
  }

  return (
    <div>
      <header className='header'>
        <div className='leftHeader'>
          <a href='localhost:3000'>
            <img className='App-logo' src={logo} alt="logo"></img>
          </a>
          <input className='searchBox' type="search" placeholder='Search Facebook'></input>
        </div>
        <div className='middleHeader'>
          { renderButtons('middleHeader') }
        </div>
        <div className='rightHeader'>
          { renderButtons('rightHeader') }
        </div>
      </header>
      <div className='body'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
