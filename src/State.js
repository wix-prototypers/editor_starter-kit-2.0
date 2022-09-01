import { Actions } from "./Actions.js";

//Create a Proxy Object that will be used to update the state amd call actions (imported above).

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
    set: (state, key, value) => {
      state[key] = value;
      Actions[key] && Actions[key].call(this, value);
      return true;
    },
  });
  window.state = state;
  return state;
};

export const setState = (state, key, val) => {
  state[key] = val;
  return state;
};
