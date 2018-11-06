import * as types from '../constants';

const initialState = {
  open: false,
  terminal: false,
  filled: false,
  submitted: false
}

export default function appReducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        open: !state.open,
      };
    case types.TOGGLE_TERMINAL:
      return {
        ...state,
        terminal: !state.terminal,
      };
    case types.SECTION_FILLED:
      return {
        ...state,
        filled: !state.filled,
      };
    default:
      return state;
  }
}
