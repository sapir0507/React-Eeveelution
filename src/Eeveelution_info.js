import "./scss/Eeveelution_info.css";

const Eeveelution_info = ({PokemonName, Image_src, Paragraph}) => {
    return ( 
        <li className="PokemonList__item">
            <h3>{PokemonName}</h3>
            <div className="Pokemon">      
                <div className="pokemon-pic">
                    <img src={Image_src} alt={"visual representation of " + PokemonName} />
                </div>
                {Paragraph}
            </div>
        </li>
     );
}
 
export default Eeveelution_info;