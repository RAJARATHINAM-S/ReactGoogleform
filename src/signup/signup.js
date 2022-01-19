import React, { useEffect, useState } from "react";
import "../signup/signup.css";
const Signup = () => {
    const[showPassword,setPassword]=useState(false)
    const[data,setData]=useState({firstName:"",lastName:"",email:"",
    password:"",confirmPassword:""})
    console.log(data);
    const submit=()=>{
setData({firstName:"",lastName:"",email:"",
password:"",confirmPassword:""})
    }
  return (
    <div className="mainh">
      <div className="mcontainer">
        <h3>Google</h3>
        <h4>Create your Google Account</h4>
        <div>
          <input className="in" placeholder="Fist Name" value={data.firstName} onChange={(e)=>{setData({...data,firstName:e.target.value})}} />
          <input className="in" placeholder="Last Name" value={data.lastName} onChange={(e)=>{setData({...data,lastName:e.target.value})}} />
        </div>
        <div>
          <input className="in em" placeholder="UserName" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
          <h6 style={{marginLeft:"9px"}}>you can use letters,numbers & periods </h6>
        </div>
        <button>Use my current email address instead</button>
        <div>
          <input className="in" type={showPassword? "text":"password"} value={data.password} placeholder="password" 
          onChange={(e)=>{setData({...data,password:e.target.value})}} />
          <input className="in" type={showPassword? "text":"password"} value={data.confirmPassword} placeholder="confirm" 
          onChange={(e)=>{setData({...data,confirmPassword:e.target.value})}}/>
          <h6 style={{marginLeft:"9px"}}>
            Use 8 or more chacters with a mix of letters ,numbers & symbols
          </h6>
        </div>
        <span className="checkbox">
          <input style={{marginRight:"5px"}} onClick={()=>{setPassword((prev)=>!prev)}} type={"checkbox"} /> <h6>showPassword</h6>
        </span>
        <div className="lb">
            <button>Signin instead</button>
            <button className="nextbtn" onClick={submit}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
