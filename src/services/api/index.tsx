import axios from 'axios';
const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getToken = async () => {
  try {
    const response = await axios.get(`${baseUrl}/token`);
    return response.data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export const getUsers = async (page = 1, count = 6) => {
  try {
    const response = await axios.get(
      `${baseUrl}/users?page=${page}&count=${count}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
