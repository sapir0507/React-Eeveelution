import { useEffect, useState } from "react";
import "./scss/Login.css";

const Login = () => {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Login_data, setLogin_data] = useState();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/login")
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setLogin_data(data);
        });
    }, [])

  
    
    const handleSubmit = (e) =>{
        let message;
        e.preventDefault();
        
        
        Login_data.forEach(user => {
            message = document.getElementById("login_status_message")
            if(UserName === user.username && Password === user.password){
                console.log("logged in");
                message.innerHTML = "Login Sucssesful"
                message.style.color = "#392"
            }
            else{
                console.log("login failed");
                message.innerHTML = "Login Failed"
                message.style.color = "red"
            } 
        });
    }

    return ( 
        <div className="login_page">
            <div className="login_page__container">
               <h1>Login</h1>
               <div class="login_form">
                   <form onSubmit={handleSubmit}>
                        <div className="username">
                            <label for="username" class="username">Username: </label>
                            <input type="text" class="username" name="username" id="username" placeholder=""
                                value={UserName}
                                onChange={(e)=>{
                                setUserName(e.target.value);
                            }}/>
                        </div>
                        <div className="password">
                            <label for="password" class="password">Password: </label>
                            <input type="password" class="password" name="password" id="password" placeholder=""
                                value={Password}
                                onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                        </div>
                       <div className="btn">
                             <button type="submit" class="login-sumbit">Submit</button>
                       </div>
                      
                   </form>
                            
                    <div className="login_status">
                        <p id="login_status_message"></p>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default Login;