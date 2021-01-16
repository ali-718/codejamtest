import axios from "axios";

export const fetchPhotos = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
    dispatch({ type: "GET_PHOTOS", payload: res.data?.slice(0, 1000) });
  });
};

export const fetchUsers = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    dispatch({ type: "GET_USERS", payload: res.data });
  });
};

export const fetchAlbums = (id) => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
    dispatch({ type: "GET_ALBUMS", payload: res.data });
  });
};
