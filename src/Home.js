import './Home.css';
import Posts from './Posts';
import Stories from './Stories';

function Home(){
    const renderButtons = () => {
        let ar = [1,2,3,4,5,6];
        return ar.map(elem=>{
            return(
                <button>{elem}</button>
            );
        });
    }
    return(
        <div className='homeBody'>
            <div className='leftBar'>
                { renderButtons() }
                <footer className='footer'>
                    feet fetish
                </footer>
            </div>
            <div className='slider'>
                <Stories/>
                <div className='newPost'></div>
                { renderButtons() }
                <Posts/>
            </div>
            <div className='rightBar'>
                { renderButtons() }
            </div>
        </div>
        
    );
}

export default Home;