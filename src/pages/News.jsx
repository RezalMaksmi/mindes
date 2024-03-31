import React from 'react'
import { NewsAdmin, NewsUser } from '../components';

const News = () => {
    const getUserDataFromLocalStorage = () => {
        const user = localStorage.getItem("userData"); 
        return user ? JSON.parse(user) : {};
      };
     
      const { token, role } = getUserDataFromLocalStorage();
    
  return (
    role === "admin" && token ? (
            <NewsAdmin />
        ) : (
            <NewsUser />
        )
  )
}

export default News
