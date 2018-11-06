import * as types from '../constants';

export function toggleMenu() {
  return {
    type: types.TOGGLE_MENU
  };
}

export function toggleTerminal() {
  return {
    type: types.TOGGLE_TERMINAL
  };
}

export function filledSection() {
  return {
    type: types.SECTION_FILLED
  };
}
