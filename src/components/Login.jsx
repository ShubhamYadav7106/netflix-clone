import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const app=initializeApp(firebaseConfig);
  const navigate=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const auth=getAuth();

  const onSignInClickHandler =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(auth=>{
      if(auth){
        navigate("/deshboard"); 
      }
    })
  
    .catch(error=>toast.error(error.message));
    
   
  }
  return(
    <div className="login">
      <div className="holder">
        <h1 className="text-white">Sign In</h1>
        <br/>
        <form>
          <input 
            className="form-control" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" 
            placeholder="Email"/>

          <input 
            className="form-control"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            placeholder="Password"/>
          <button className="btn btn-danger btn-block" onClick={onSignInClickHandler}>Sign In</button>
          <br/>
           <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Remember Me
            </label>
          </div>
        </form>
        <br/>
        <br/>
     <div className="login-form-other">
          <div className="login-signup-now">
          New to Netflix? &nbsp;{/* connects into one line -non breaking space*/}
            <a className="" target="_self" href="/">Sign up now
            </a>
          </div>
      </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
    
  )
}

export default Login;