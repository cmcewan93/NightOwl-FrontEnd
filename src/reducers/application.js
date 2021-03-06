const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_USER_AUTH = "SET_USER_AUTH";
const SET_BAR_ID = "SET_BAR_ID"

function reducer(state, action) {
  //("This is the action", action);
  switch (action.type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        venues: action.value[0].data,
        reviews: action.value[1].data,
        visits: action.value[2].data
      };
    case SET_USER_AUTH:
      return {
        ...state,
        userAuth: action.auth
      };
    case SET_BAR_ID:
      return {
        ...state,
        barId: action.auth
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
export { reducer, SET_APPLICATION_DATA, SET_USER_AUTH, SET_BAR_ID };
