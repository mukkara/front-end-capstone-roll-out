import React, { useState, useEffect } from "react";
import ApplicationViews from './ApplicationViews';




const Initialize = (props) => {

  
  
    const isAuthenticated = () => {
      if (
        sessionStorage.getItem("activeUser") !== null ||
        localStorage.getItem("activeUser") !== null
      ) {
        return true;
      } else {
        return false;
      }
    };
    
    const [hasUser, setHasUser] = useState(isAuthenticated());

    const setUser = (user) => {
      sessionStorage.setItem("activeUserID", user.userId);
      sessionStorage.setItem("activeUser", user.userName)
      setHasUser(isAuthenticated())
      
    }
    
    
    return (
        <>
          <ApplicationViews setUser={setUser} hasUser={hasUser} />
        </>
    )
}

export default Initialize