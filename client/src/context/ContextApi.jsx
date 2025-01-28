/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ApiContext = createContext();

export function ContextApi({ children }) {
    const baseUrl = "http://localhost:5000/blog/api";
    
    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    });

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

    // Get token and decode it to get user data
    const token = localStorage.getItem('token');
    const decodedUserData = token ? jwtDecode(token) : {}; // Decode the token if available
    const [userData, setUserData] = useState(() => {
        // Load userData from localStorage if available
        const storedData = localStorage.getItem('userData');
        return storedData ? JSON.parse(storedData) : decodedUserData;
    });

    // Update user data in the context and localStorage
    const updateUserData = (newUserData) => {
        const updatedUserData = { ...userData, ...newUserData };
        setUserData(updatedUserData);

        // Store the updated user data in localStorage
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
    };

    return (
        <ApiContext.Provider value={{ apiRequest, theme, toggleTheme, userData, updateUserData }}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApi = () => useContext(ApiContext);
