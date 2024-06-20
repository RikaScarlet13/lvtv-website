// src/api/apiService.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your Laravel API base URL
  timeout: 10000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // Add any headers you need (e.g., authorization headers)
  },
});

export const getUser = async () => {
  try {
    const response = await instance.get('/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// Add more API functions as needed for different endpoints
