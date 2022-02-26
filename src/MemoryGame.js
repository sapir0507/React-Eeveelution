import "./css/MemoryGame.css"
import { useState, useEffect} from "react";
import Card from "./Card";
import {useMediaQuery} from "./utils/MediaQueryHook";

const PokemonArray = [
    {src: "./images/espeon.jpg", matched: false},
    {src: "./images/eevee.jpg", matched: false},
    {src: "./images/flareon.jpg", matched: false},
    {src: "./images/glaceon.jpg",matched: false},
    {src: "./images/umbreon.jpg",matched: false},
    {src: "./images/jolteon.png", matched: false},
    {src: "./images/sylveon.png", matched: false},
    {src: "./images/leafeon.png", matched: false},
    {src: "./images/vaporeon.png", matched: false}
]

const MemoryGame = ({togglePopup}) => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [matches, setMatches] = useState(0)
    const [choiceOne, setchoiceOne] = useState(null)
    const [choiceTwo, setchoiceTwo] = useState(null)
    const [disabled, setdisabled] = useState(false)

    const shuffleCards = () => {
        /* shuffleCards -> a function that initializes the game cards, number of turns and successful matches */
        /* miniPack gets 5 cards from the PokemonArray after they are shuffled twice */
        const miniPack = [...PokemonArray]
        .sort(()=> Math.random() -0.5)
        .sort(()=> Math.random() -0.25)
        .slice(1, 6)
        /* shuffled cards take the five chosen cards and duplicates them, shuffles them (math.random() -0.5) before creating and returning
        a new array that adds an id for each card with the math.random function*/
        const shuffledCards = [...miniPack, ...miniPack]
        .sort(() => Math.random() - 0.5)
        .map((card)=>({...card, id: Math.random()}))
        /* reset the found cards and number of turns to zero. This also changes what cards are to be shown out of all the eeveelution*/
        setCards(shuffledCards);
        setTurns(0);
        setMatches(0);  

        console.log(cards);
    }

    const handleChoice = (card) =>{
        /* handleChoice -> This function gets a clicked card.
                           The function sets the card as choiceOne or ChoiceTwo depending on which of the variables are not null*/
        console.log(card);
        choiceOne ? setchoiceTwo(card) : setchoiceOne(card);
    }

    const resetTurn = () => {
        /* resetTurn -> This function resets choiceOne and ChoiceTwo to be null, and enables the user's ability to select new cards */
        setchoiceOne(null)
        setchoiceTwo(null)
        setdisabled(false);
    }

    useEffect(() => {
        /* The useEffect hook -> 
            the useEffect hook activates when choiceOne and ChoiceTwo update with a new value
            If both contain a value - 
                disable the user's ability to select a new card
                check if choiceOne and ChoiceTwo are equal
                    if so, add more match to matches
                            reset choiceOne and ChoiceTwo, and enable the user to choose a new card
                            update cards to show that those two cards are now matched
                    if not, don't change the array (just return the card without making any changes)
                    wait 900 miliseconds and  reset choiceOne and ChoiceTwo, and enable the user to choose a new card
                add one to the number of turns.
                */
       var both = (choiceOne && choiceTwo) ? true : false;
       if(both)
       {
           console.log('both choices were made')
            setdisabled(true);
           if(choiceOne.src===choiceTwo.src){
               console.log('the cards are a match')
               setMatches(matches + 1)
               resetTurn();
               setCards(prevCards => {
                   return prevCards.map(card => {
                       if(card.src === choiceOne.src) {
                            return {...card, matched: true} 
                       }
                       else {
                           return card;
                       }
                   
                   })
               })
           }
           else{
               console.log('sorry, but the cards are not a match')
               setTimeout(() => resetTurn(), 900)
           }
           setTurns(turns + 1)
          
       }
    }, [choiceOne, choiceTwo])

    useEffect(() => {
        /* use the shuffleCards function once at the loading of the webpage */
       shuffleCards()
    }, [])

    useEffect(() => {
      if(matches && matches === 5)
      {
         /*alert window for wining the game*/ 
         togglePopup()
      }
    }, [matches])

    return ( 
        <div className="memory-game">
            <h2>Memory Game</h2>
            <div className="score">
                  <p>Turns: {turns}</p>
                  <button onClick={shuffleCards}>New Game</button>
                  <p>Matches: {matches} </p>
            </div>
            
            <div className="game-cards">
                {
                    cards.map(card => (
                      <Card 
                        key = {card.id}
                        card={card} 
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled = {disabled}
                      ></Card>
                    ))
                }
            </div>
        </div>
     );
}
 
export default MemoryGame;