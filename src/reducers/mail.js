import * as types from '../constants';

const initialState = {
  sending: false,
  error: false,
  status: '',
}

export default function mailReducer(state = initialState, action = {}) {
  switch(action.type) {
    case types.SEND_MAIL:
      return {
        ...state,
        sending: true,
      };
    case types.SEND_MAIL_SUCCESS:
      return {
        ...state,
        sending: false,
        error: false,
        status: 'success',
      };
    case types.SEND_MAIL_FAILURE:
      return {
        ...state,
        sending: false,
        error: true,
        status: 'error',
      }
    default:
      return state;
  }
}
