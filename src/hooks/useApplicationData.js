import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, SET_APPLICATION_DATA } from "../reducers/application";
import {setAuth} from "../components/App"

export default function useApplicationData() {
  /**
   * Manages the application state
   */

  const [state, dispatch] = useReducer(reducer, {
  
  });

  /**
   * Retrieves state data from api
   * Every time component changes does another axios call
   * */
  useEffect(() => {
    Promise.all([
      axios.get("/api/venues"),
      axios.get("/api/reviews"),
      axios.get("/api/visits")
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: all
      });
    });
  }, []);
  return { state, dispatch };
}
