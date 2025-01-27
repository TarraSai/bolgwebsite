/* eslint-disable react/prop-types */
import { createContext,useContext,useState } from "react"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
const ApiContext = createContext()
 export function ContextApi({children}) {
    const baseUrl="http://localhost:5000/blog/api"
   
    const axiosInstance=axios.create({
        baseURL:baseUrl,
        headers:{
            'Content-Type':'application/json'
        }
    })
    const apiRequest = async (url, method, data = null) => {
        try {
          const response = await axiosInstance({
            url,
            method,
            data,
          });
          return response.data;
        } catch (error) {
          console.error("API Request Error:", error);
          throw error;
        }
      };
      const [theme, setTheme] = useState("light");

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        document.documentElement.classList.toggle("dark");
      };

      const token=localStorage.getItem('token')
       const userData = jwtDecode(token);
  return (
    <ApiContext.Provider value={{  apiRequest, theme, toggleTheme ,userData }}>
    {children}
  </ApiContext.Provider>
  )
}
export const useApi = () => useContext(ApiContext);


