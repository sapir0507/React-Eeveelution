import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./css/GameExplained.css";


const all_panals = [
    {
        id: 1,
        Panal_ID: "memoryGame-info1",
        src: "./images/gameCover.jpg",
        h1: <h1>Eeveelution Memory Game</h1>,
        text: <p>Play to challage yourselves in a memory game containing the different Eeveelution types!</p>,
        my_text_hidden: <div className="game-info__hidden-text"> 
            <p>To Play in the Eeveelution Memory Game, <a href="/MemoryGame">click here </a> </p>
        </div>,
        position: 1 
    }, 
    {
        id: 1,
        Panal_ID: "memoryGame-info2",
        src: "./images/Eeveelutions.png",
        h1:   <h1>Eeveelution, What is it?</h1>,
        text: <p>Discover the exact definition of what an Eeveelusion actaully is. Exoplore the different evelutions and what they have to offer</p>,
        my_text_hidden: <div className="game-info__hidden-text">
            <p>An Eeveelution is a term used for the current group of eight Pokémon that evolve from Eevee.  It is a portmanteau of the words "Eevee" and "evolution". Its definition may be extended to include Eevee itself. </p>
            <p>Currently, those 7 are the official Eevee's evelutions: 
                <ul className="flex-container">
                    <li className="bg_clr_blue">Vaporeon</li>
                    <li className="bg_clr_dark">Umbreon</li>
                    <li className="bg_clr_red">Flareon</li>
                    <li className="bg_clr_yellow">Jolteon</li>
                    <li className="bg_clr_ice_blue">Glaceon</li>
                    <li className="bg_clr_l-pink">Sylveon</li>
                    <li className="bg_clr_green">Leafeon</li>
                    <li className="bg_clr_pink">Espeon</li>
                </ul>
                </p>
        </div>,
        position: 2 
    }, 
    {
        id: 3,
        Panal_ID: "memoryGame-info3",
        src: "./images/types.png",
        h1: <h1>Types - Behind the sceans</h1>,
        text: <p>What are the differemt Pokemon types, and what are they good for?</p>,
        my_text_hidden: <div className="game-info__hidden-text">
            <p>There are 18 total official types of Pokémon, but there are only seven different types for an Eevee's evelution: 
                <ul className="flex-container">
                    <li className="bg_clr_blue">Water</li>
                    <li className="bg_clr_dark">Dark</li>
                    <li className="bg_clr_red">Fire</li>
                    <li className="bg_clr_yellow">Electic</li>
                    <li className="bg_clr_ice_blue">Ice</li>
                    <li className="bg_clr_l-pink">Fairy</li>
                    <li className="bg_clr_green">Grass</li>
                    <li className="bg_clr_pink">Psychic</li>
                </ul>
                <p>
                     Some Pokemon types are stronger against other types, so make sure to take that into account! 
                </p>
               
            </p>
        </div>,
        position: 3 
    }, 
]

const GameExplained = () => {
    const [GE_Clicked, SetGE_Clicked] = useState(false);
    const [PanelsNum, setPanelsNum] = useState(0);
    const [SlidesOrder, setSlidesOrder] = useState([2,3,4]);
    

    const toggle_info_pan = (id) => {
        let pan;
        SetGE_Clicked(!GE_Clicked)

        switch (id) {
            case "memoryGame-info1":
                pan = document.getElementById("memoryGame-info2") // get panel
                pan.classList.toggle("GameExplained__remove")
                pan = document.getElementById("memoryGame-info3") // get panel
                pan.classList.toggle("GameExplained__remove")
                setPanelsNum(1);
                break;
            case "memoryGame-info2":
                pan = document.getElementById("memoryGame-info1") // get panel
                pan.classList.toggle("GameExplained__remove")
                pan = document.getElementById("memoryGame-info3") // get panel
                pan.classList.toggle("GameExplained__remove")
                setPanelsNum(2);
                break;
            case "memoryGame-info3":
                pan = document.getElementById("memoryGame-info2") // get panel
                pan.classList.toggle("GameExplained__remove")
                pan = document.getElementById("memoryGame-info1") // get panel
                pan.classList.toggle("GameExplained__remove")
                setPanelsNum(3);
                break;
            default:
                setPanelsNum(0);
                pan = document.getElementById("memoryGame-info1") // get panel
                pan.classList = "GameExplained__flex-container";
                pan = document.getElementById("memoryGame-info2") // get panel
                pan.classList = "GameExplained__flex-container";
                pan = document.getElementById("memoryGame-info3") // get panel
                pan.classList = "GameExplained__flex-container";
                break;
        }
       
        pan = document.getElementById("GameExplained__right-arrow") //remove right and left arrows
        pan.classList.toggle("GameExplained__remove")
        pan = document.getElementById("GameExplained__left-arrow")
        pan.classList.toggle("GameExplained__remove")

        pan = document.getElementById(id) // enlarge selected panal
        pan.classList.toggle("GameExplained__enlarge")

    }

    
    const close_btn = (id) => {
        return(
            <div className="close-panle" onClick={GE_Clicked? () => {toggle_info_pan(id)} : ""}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </div>
        )
    }

    const Panals = (id) => {
        let my_src, my_h1, my_text, my_text_hidden, my_position;
        all_panals.forEach((panal) => {
            if(panal.Panal_ID === id){
                my_src = panal.src;
                my_h1 = panal.h1;
                my_text = panal.text;
                my_text_hidden = panal.my_text_hidden;
                my_position = panal.position;
            }
        })
        return(
        <
            div id={id} 
            className="GameExplained__flex-container" 
            onClick={GE_Clicked? "" : () => {
                toggle_info_pan(id)
            }}
        >
            <div className="game-image">
                {GE_Clicked && PanelsNum && close_btn(id)}
                <div className="game-image__game-cover">
                    <img src={my_src} 
                    alt="game cover" 
                    className={"GameExplained__game-image GameExplained__order" + my_position}
                />
                </div>
                
                <div className="game-info">
                    {my_h1}
                    {my_text}
                    {
                        GE_Clicked && PanelsNum &&   
                        <div className="game-info__hidden-text">
                             {my_text_hidden}    
                        </div>            
                                            
                    }
                </div>
            </div>
        </div>
        )
    }

    const slide_panals = (side) =>{
        let new_array ;
    
        if(side === "right"){
            new_array = (SlidesOrder.map((slide) => {
                if(slide + 1 >= 5)
                {
                    return 2;
                } 
                else return slide + 1;
               
            }));
        }
        else if(side === "left")
        {
            new_array = (SlidesOrder.map((slide) => {
                if(slide - 1 <= 1)
                {
                    return 4;
                } 
                else return slide - 1;
             
            }));
        }
      
        setSlidesOrder(new_array);
    }

    useEffect(() => {
        let pan, i;
        for(i = 0; i < 3; i++){
            console.log(SlidesOrder[i])
            pan = document.getElementById(`memoryGame-info${i+1}`) // get panel
            pan.className = `GameExplained__flex-container GameExplained__order${SlidesOrder[i]}`
        }   
    }, [SlidesOrder]);
    



    return ( 
        <div className="GameExplained">
           <div id="GameExplained__right-arrow" className="GameExplained__center-icons GameExplained__order1 white" onClick={()=>{slide_panals("left")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                </svg>
            </div>
           
            {Panals("memoryGame-info1")}
            {Panals("memoryGame-info2")}
            {Panals("memoryGame-info3")}

            <div id="GameExplained__left-arrow" className="GameExplained__center-icons GameExplained__order5 white" onClick={()=>{slide_panals("right")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                </svg>
            </div>
        </div>
     );
}
 
export default GameExplained;