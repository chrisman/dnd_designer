import axios from "axios";
import * as actionTypes from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res.data
  });
};

export const fetchRace = name => async dispatch => {
  const res = await axios.get(`/api/character/race/${name}`)
  dispatch({
    type: actionTypes.FETCH_RACE_INFO,
    payload: res.data
  });
};
