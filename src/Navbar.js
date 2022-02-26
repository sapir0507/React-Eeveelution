import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown  } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './css/navigationBar.css';

const Navbar = () => {

    const dropdownNow = () => {
        let dropdown = document.getElementById("dropdown__btn__all-games")
        dropdown.classList.toggle("active");
    }


    return ( 
        <div className="navigation-bar">
            <h2>Eeveelution For All</h2>
            <div className="navigation-bar__buttons">
                
                <Link to="/Login">login</Link>
           
                <div className="navigation-barr__all_games">
                    <div className="dropdown">
                        <div className="dropdown__btn" onClick={dropdownNow}>
                        <FontAwesomeIcon icon={faArrowDown}/> <span> {' All Games'}</span>
                        </div>
                        <div id="dropdown__btn__all-games" className="dropdown__games" onClick={dropdownNow}>
                            <Link to="/MemoryGame">Memory Game</Link>
                        </div>
                    </div>
                </div>
                <Link to="/">Home</Link>
            </div>  
        </div>
     );
}
 
export default Navbar;