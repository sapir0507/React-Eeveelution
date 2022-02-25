import { Link } from "react-router-dom";
import './css/Home.css';
import AboutMe from "./AboutMe";
import GameExplained from "./GameExplained";


const Home = () => {
    return ( 
        <div className="homepage">
            <div className="homepage__greeting">
                <h1>Welcome, Trainers!</h1>
                <div className="homepage__cover"></div>
                <div className="disclaimer">
                    <p> <i>Disclaimer:</i> This website isn't done for profit purposes. Pokemon and all the Eeveelutions belong to Nintendo.</p>
                </div>
            </div>
            <div className="homepage__flex-container">
                    <div className="side-pic"></div>
                    <div className="words">
                        <p>We are honored to have you here at Eeveelution For All. We provide a fun, informative way for you to:</p>
                            <ol>
                                <li>Familiarize yourselves with: <p><Link to="/Eeveelution">what is Eeveelution?</Link></p></li>
                                <li>Play Eeveelution centered games</li>
                            </ol>
                    </div>
                </div>
            <div className="homepage__grid-homepage">
                <div className="game-explained">
                    <GameExplained/>
                </div>
                <div className="featured-Pokemon">
                    
                </div>
                <div className="about-me">
                    <AboutMe/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;