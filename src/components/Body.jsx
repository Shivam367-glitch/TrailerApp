import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { auth } from "../utils/firebase";
import Header from "./Header.jsx";
const Body = () => {
  
  const dispatch = useDispatch(); 
  const navigate=useNavigate(); 
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // When user Sign In and Sign Up
        const { uid, displayName, email,photoURL } = user;
        dispatch(addUser({ uid, displayName, email,photoURL })); 
        navigate('/browser')
      } else {
        // when user is Sign Out
        dispatch(removeUser());
        navigate('/')
      }
    }); 
    return ()=>{
      unsubscribe();
    }
  }, []); // Add dependencies

  return (
    <div className="app-layout">
    <Header className="header" />
    {/* <ScrollToTop /> */}
    <main className="main-content">
      <Outlet />
    </main>
    {/* <Analytics /> */}
    {/* <Footer className="footer" /> */}
  </div>
  );
};

export default Body;