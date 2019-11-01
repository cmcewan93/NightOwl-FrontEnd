import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, SET_APPLICATION_DATA } from "../reducers/application";

export default function useApplicationData() {
  /**
   * Manages the application state
   */

  const [state, dispatch] = useReducer(reducer, {
    venues: [],
    users: [],
    reviews: []
  });

  /**
   * Retrieves state data from api
   * Every time component changes does another axios call
   * */
  useEffect(() => {
    console.log("in here");
    Promise.all([
      Promise.resolve(axios.get("/api/venues")),
      Promise.resolve(axios.get("/api/users")),
      Promise.resolve(axios.get("/api/reviews"))
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: all
      });
    });
  }, []);
  return { state };
}
