import { useEffect } from "react";
import Chat from "./components/chat/Chat";
//import { ToastContainer } from "react-toastify";

import  Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/lib/firebase";
import { useUserStore } from "./components/lib/userStore";
const App = () => {
 // const user = false;
 const {currentUser, isLoading, fetchUserInfo} = useUserStore()


  useEffect(()=>{
const unsub = onAuthStateChanged(auth, (user)=>{
fetchUserInfo(user.uid);
});
  return()=>{
    unsub();
  };
  },[fetchUserInfo]);
  console.log(currentUser)
  if(isLoading) return<div className="loading">Loading...</div>
  return (
    <div className="container">
      {
        user ? (
         <>
          <List/>
          <Chat/>
          <Detail/>
         </> 
          ) : (
      <Login/>
    ) }
    <Notification/>
    </div>
  );
};
export default App;
  