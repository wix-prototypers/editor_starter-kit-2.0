import { Actions } from "./Actions.js";

//Create a Proxy Object that will be used to update the state and call actions (imported above).
export const State = (
  initialState = {
    leftPanel: "close",
    zoomMode: false,
    selectedElement: null,
  }
) => {
  const state = new Proxy(initialState, {
    get: (state, key) => {
      return state[key];
    },
    //The set function will be called each the state
    set: (state, key, value) => {
      state[key] = value;
      //When an action function has a name that matches the state key, it gets called.
      Actions[key] && Actions[key].call(this, value);
      return true;
    },
  });
  
  //Make state reachable from the window object.
  window.state = state;

  return state;
};
  //Create a separate function that will set the state.
export const setState = (state, key, val) => {
  state[key] = val;
  return state;
};
