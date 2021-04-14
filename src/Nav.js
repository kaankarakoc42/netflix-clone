import React,{useState,useEffect} from 'react';
import './Nav.css'

function Nav(){
  const [show,handleShow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true)
      }
      else{
        handleShow(false)
      }
      return () =>{
        window.removeEventListener("scroll")
      }
    })
  },[])  
  return (
          <div className={`Nav ${show&&"NavBlack"}`}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="logo" className="navLogo"/>
             <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="avatar" className="navAvatar"/>
          </div>
  );
}

export default Nav;