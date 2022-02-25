import "./css/AboutMe.css"
const AboutMe = () => {
    return ( 
        <div className="AboutMe">
            <div className="AboutMe__container">
                <div className="profile_pic">
                    <img src="./images/profile_pic.png" alt="a profilo of me"/>
                    <p></p>
                </div>
                <div className="AboutMe__content">
                    <div className="title">
                        <h1>About Me</h1>
                    </div>
                    <div className="details">
                        <p>My name is Sapir Shahar and I'm a junior frontend developer</p>
                        <p>I'm twenty seven and very motivated!</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default AboutMe;