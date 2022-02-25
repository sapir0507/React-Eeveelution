import './css/Card.css'

const Card = ({key, card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return ( 
        <div className="card-grid">
            <div className={flipped ? "flipped" : ""}>
                <div className="front">
                    <img 
                        className="front" 
                        src={card.src} 
                        alt="card front"
                    />
                </div>
                <div className="back">
                    <img 
                        className="back" 
                        src="./images/background.jpg" 
                        onClick = {(!disabled) ? handleClick: ""} 
                        alt="card back"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Card;