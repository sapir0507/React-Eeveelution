import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Login from "./Login";



const EeveelutionFight = () => {
    const [Login_data, setLogin_data] = useState(null);
    const [LoggedIn, setLoggedIn] = useState(false);
   

    useEffect(() => {
        fetch("http://127.0.0.1:8000/login")
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setLogin_data(data);
        });
    }, [])


    

    return ( 
        <div className="EeveelutionFight">
            {
                Login_data && !LoggedIn &&
            
                <div className="login-page">
                    <Login Login_data={Login_data}/>
                </div>
            }
           
        </div>
     );
}
 
export default EeveelutionFight;