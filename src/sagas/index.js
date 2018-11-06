import * as types from '../constants';
import axios from 'axios';
import { delay } from 'redux-saga';
import {
  apply,
  takeEvery,
  takeLatest,
  throttle,
  put,
  call,
  take,
  all,
  fork,
} from 'redux-saga/effects';

function nodemailer(data) {
  return axios({
    method: 'post',
    url: '/contact',
    data: {
      email: data.email,
      message: data.message,
      name: data.name,
      selected: data.selected,
    }
  });
}

function* sendMail(data) {
  console.log('saga', data);
  yield delay(1250);
  const request = yield call(nodemailer, data);
  const result = request.data;
  console.log('results', result);
  try {
    yield put({ type: types.SEND_MAIL_SUCCESS, result });
  } catch (error) {
    yield put({ types: types.SEND_MAIL_FAILURE, error });
  }
}

function* rootSaga() {
  yield takeEvery(types.SEND_MAIL, sendMail);
}

export default rootSaga;
