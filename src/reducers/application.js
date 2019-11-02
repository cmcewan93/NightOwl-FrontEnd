const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_USER_AUTH = "SET_USER_AUTH";

function reducer(state, action) {
  //console.log("@@@@@", action.value[0].data);
  switch (action.type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        venues: action.value[0].data,
        reviews: action.value[1].data,
        visits: action.value[2].data
      }
    case SET_USER_AUTH:
      return {
        ...state,
        userAuth: action.auth
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
export { reducer, SET_APPLICATION_DATA, SET_USER_AUTH };
