import "./css/PopupWindow.css"
import MemoryGame from "./MemoryGame";

const PopupWindow = () => {
    const togglePopup = () => {
        document.getElementById("popupWindow1").classList.toggle("active");
    }
    return ( 
        <div>
            <div id="popupWindow1" className="popup">
                <div className="overlay">  
                </div>
                <div className="content">
                    <div className="close-btn" onClick={togglePopup}>&times;</div>
                    <h1>You Have Won!</h1>
                    <p>Congragulation on winning the memory game</p>
                </div>
            </div>
            <MemoryGame togglePopup={togglePopup}/>
         </div>
    );
}
 
export default PopupWindow;