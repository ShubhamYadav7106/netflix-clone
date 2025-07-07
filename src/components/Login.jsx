import { Link, useLocation, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const app=initializeApp(firebaseConfig);
  const navigate=useNavigate();
  const location=useLocation();
  // console.log(location);
  const page=location.pathname==='/login'?true:false;
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const auth=getAuth();
const [userExist,setUserExist]=useState(false);
const [emailUsed,setEmailUsed]=useState(false);

  const onSignInClickHandler =(e)=>{
    e.preventDefault();
    if(page){
       signInWithEmailAndPassword(auth,email,password)
    .then(auth=>{
      if(auth){
        navigate("/deshboard"); 
      }
    })
  
    .catch(error=>setUserExist(true));
    
    }else{
      // register part 
      createUserWithEmailAndPassword(auth,email,password)
      .then(
        auth=>{
          if(auth){
              navigate('/deshboard')
          }
        }

      )
      .catch(error=>setEmailUsed(true));
    }
   
   
  }
 
  useEffect(()=>{
    setUserExist(false);
    setEmailUsed(false);
  },[location]);
  
  return(
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ? 'Sign In':'Register'}</h1>
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
          <button className="btn btn-danger btn-block" onClick={onSignInClickHandler}>{page?'Sign In' : 'Register'}</button>
          <br/>
           {
            page && <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Remember Me
            </label>
          </div>
}
        </form>
        <br/>{
          userExist && <p className="text-danger m-0 ">User does not Exist Go for Signup</p>
        }
        <br/>{ 
          emailUsed && <p className="text-danger m-0 ">Email already in use Go for Signin</p>
        }
        <br/>
     <div className="login-form-other">
          <div className="login-signup-now my-4">{page?
          'New to Netflix?':'Existing User'} &nbsp;{/* connects into one line -non breaking space*/}
            <Link className="" target="_self" to={page?'/register':'/login'}>{page?'Sign up now':'Sign In'}
            </Link>
          </div>
      </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
    
  )
}

export default Login;