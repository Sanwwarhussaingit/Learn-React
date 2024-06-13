/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login,logout} from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then(function(userData){
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout());
      }
    })
    .finally(function(){
      setLoading(false);
    });
  },[]);

 
  return !loading ?(
    <div className="min-h-screen flex felx-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header/>
        <main>
          Todo
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null

}

export default App;
