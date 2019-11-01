const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

function reducer(state, action) {
  //console.log("@@@@@", action.value[0].data);
  switch (action.type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        venues: action.value[0].data,
        users: action.value[1].data,
        reviews: action.value[2].data,
        visits: action.value[3].data
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
export { reducer, SET_APPLICATION_DATA };
