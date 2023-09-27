import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_REACT_APP_API_KEY;

// Define API endpoints in an object for better organization
const endpoints = {
  trending: "/trending/all/day",
  movieByGenre: "/discover/movie",
};

// Create a base Axios instance with common configuration
const axiosInstance = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: api_key, // Use environment variables for the API key
  },
});

// Function to get trending videos
const getTrendingVideos = async () => {
  try {
    const response = await axiosInstance.get(endpoints.trending);
    return response.data;
  } catch (error) {
    // Handle errors here, e.g., log the error or provide fallback data
    console.error("Error fetching trending videos:", error);
    throw error;
  }
};

// Function to get movies by genre ID
const getMovieByGenreId = async (id) => {
  try {
    const response = await axiosInstance.get(endpoints.movieByGenre, {
      params: {
        with_genres: id,
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors here, e.g., log the error or provide fallback data
    console.error("Error fetching movies by genre:", error);
    throw error;
  }
};

export { getTrendingVideos, getMovieByGenreId };
