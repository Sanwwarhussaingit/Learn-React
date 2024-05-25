
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    
      <>
      <Header/>
      <Outlet/> 
      <div>Lorem ipssse nostrum quas tempora.</div>
      </>
    
  );
};

export default Layout;
